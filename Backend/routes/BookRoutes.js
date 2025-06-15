const express = require("express")
const router = express.Router()
const Book = require("../model/BookModel")
const jwt = require("jsonwebtoken")

function verifytoken(req,res,next) {
  const token = req.headers.token
  try{
    if(!token) throw 'Unauthorized  access'
    const payload = jwt.verify(token,"bookApp")
    if(!payload) throw 'Unauthorized  access'
    next()
  }
  catch(error){
    console.log(error)
  }
}

//  Post
router.post("/post",verifytoken,async(req,res)=>{
    try {
        const {title,author,publishedYear,Image} = req.body
        if(!title || !author || !publishedYear || !Image){
           return  res.status(400).send({message:"All fields are required"})
        }
        const newBook = new Book ({
            title,
            author ,
            publishedYear,
            Image
        })
        await newBook.save()
        res.status(200).json(newBook)
    } catch (error) {
        console.log(error.message)
        res.status(400).send({message:error.message})
    }
})

//  GET all
router.get("/get",verifytoken,async(req,res)=>{
    try {
        const book = await Book.find({})
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(400).send({message:error.message})
    }
})

//  GET by id
router.get("/get/:id",verifytoken,async(req,res)=>{
    try {
        const id= req.params.id
        const book = await Book.findById(id)
        if(!book){
            res.status(400).send({message:"Id not found"})
        }
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(400).send({message:error.message})
    }
})

//put 
router.put("/put/:id",verifytoken,async(req,res)=>{
    try {
    const id = req.params.id
    const {title,author,publishedYear,Image} = req.body
    const updatebook = await Book.findByIdAndUpdate(id,{title,author,publishedYear,Image},{new:true})
    if(! updatebook){
         res.status(400).send({message:"book not found"})
    }
    res.status(200).json(updatebook)
    } catch (error) {
        console.log(error.message)
        res.status(400).send({message:error.message})
    }
})

//delete
router.delete("/delete/:id",verifytoken,async(req,res)=>{
    try {
        const id = req.params.id
        const deleteBook = await Book.findByIdAndDelete(id)
        if(!deleteBook){
             res.status(400).send({message:"book not found"})
        }
        res.status(200).send({message:"deleted successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(400).send({message:error.message})
    }
})
module.exports = router