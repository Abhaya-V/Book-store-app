const mongoose = require("mongoose")

const bookSchema =mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    author :{
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

const bookModel = mongoose.model("book",bookSchema)

module.exports = bookModel