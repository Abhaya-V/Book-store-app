import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const DeleteBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance.delete(`http://localhost:5000/book/delete/${id}`)
      .then((res) => {
        alert("Are you sure to delete this book ?")
        console.log('Book deleted:', res.data)
        navigate('/home')
      })
      .catch((error) => {
        console.log('Error deleting book:', error)
      })
  }, [])

  return null
}

export default DeleteBook
