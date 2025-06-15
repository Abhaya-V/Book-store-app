import axios from 'axios'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const CreateBook = () => {
  const [form,setform] = useState({
    title :'',
    author : '',
    publishedYear:'',
    Image:''
  })

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axiosInstance.post('http://localhost:5000/book/post',form)
    .then((res)=>{
     console.log(res)
      navigate('/home')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
     <div   style={{
    backgroundImage: "url('/banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin:"0",
    height:"99vh",
    width:"99%"
   
  }}>
   
    <div className="row justify-content-center ">
    <div className="col-md-6 col-lg-4">
   
      
      <form onSubmit={handleSubmit} className='m-9 mt-3 border border-dark rounded p-5 bg-dark text-white  '>
        <h1 className='text-center'>ADD BOOK</h1>
      
        <div className="mb-3 mt-2">
            <hr></hr>
          <label className="form-label">Title</label>
          <input type="name" className="form-control" 
          onChange={(e)=>{ setform({...form,title:e.target.value})}}/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Author</label>
          <input type="name" className="form-control" 
           onChange={(e)=>{ setform({...form,author:e.target.value})}}/>
        </div>
          <div className="mb-3">
          <label className="form-label">Published Year</label>
          <input type="number" className="form-control" 
           onChange={(e)=>{ setform({...form,publishedYear:e.target.value})}}/>
        </div>
         <div className="mb-3">
          <label  className="form-label">Image</label>
          <input type="name" className="form-control" 
           onChange={(e)=>{ setform({...form,Image:e.target.value})}}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

     </div>
      </div>
         </div>
  )
}

export default CreateBook
