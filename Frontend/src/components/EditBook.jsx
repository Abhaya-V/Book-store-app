import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const EditBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    publishedYear: '',
    Image:''
  })

  const { id } = useParams()
  const navigate = useNavigate()

 
  useEffect(() => {
    axiosInstance.get(`https://book-store-app-six-roan.vercel.app/book/get/${id}`)
      .then((res) => {
        setForm(res.data)
      })
      .catch((error) => {
        console.log('Error fetching book:', error)
      })
  }, [id])

  
  const handleUpdate = (e) => {
    e.preventDefault()
    axiosInstance.put(`https://book-store-app-six-roan.vercel.app/book/put/${id}`, form)
      .then((res) => {
        console.log('Book updated:', res.data)
        navigate('/home')
      })
      .catch((error) => {
        console.log('Error updating book:', error)
      })
  }

  const { title, author, publishedYear, Image} = form

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
 
      <form className='m-9 mt-3 border border-dark rounded p-5 bg-dark text-white  ' onSubmit={handleUpdate}>
        <h1 className='text-center'>Edit Book</h1>
        <div className="mb-3 mt-2">
            <hr></hr>
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Published Year</label>
          <input
            type="number"
            className="form-control"
            value={publishedYear}
            onChange={(e) => setForm({ ...form, publishedYear: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            value={Image}
            onChange={(e) => setForm({ ...form, Image: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary ">Submit</button>
      </form>
    </div>
     </div>
      </div>
  )
}

export default EditBook
