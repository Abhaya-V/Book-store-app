import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 

const Signup = () => {
    const [form,setform] = useState({
        username:'',
        email: '',
        password:'',
        phoneno:''
      })
    
      const navigate = useNavigate()
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/user/signup',form)
        .then((res)=>{
         console.log(res)
          navigate('/')
        })
        .catch((error)=>{
          if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message); 
                } else {
                    alert("Signup failed");
                }
        })
      }
  return (
    <div  style={{
    backgroundImage: "url('/banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin:"0",
    height:"99vh",
    width:"99%"
   
  }}>
    
     <div className="row justify-content-center ">
    <div className="col-md-6 col-lg-4">
    <form className='m-8 mt-3 border border-dark p-5 bg-dark text-white'  style={{borderRadius:'20px' }}  onSubmit={handleSubmit}>
    <div className="mb-3 ">
    <h2 className='text-center'>SIGN UP</h2>
    <label className="form-label">Username</label>
    <input type="name" className="form-control"  value={form.username} onChange={(e)=>{ setform({...form,username:e.target.value})}}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={form.email}  onChange={(e)=>{ setform({...form,email:e.target.value})}}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" value={form.password} onChange={(e)=>{ setform({...form,password:e.target.value})}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Phone Number</label>
    <input type="number" className="form-control" value={form.phoneno}  onChange={(e)=>{ setform({...form,phoneno:e.target.value})}} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <div className='text-center'>
    <h6>Already user ? <Link to={'/'} >Login</Link></h6>
  </div>
</form>
</div>
</div>
    </div>
  )
}

export default Signup
