import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 

const Login = () => {
    const [form,setform] = useState({
            email: '',
            password:'',
          })
        
          const navigate = useNavigate()
        
          const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:5000/user/',form)
            .then((res)=>{
             alert(res.data.message)
             if(res.data.token){
               sessionStorage.setItem('token',res.data.token)
                navigate('/home')
             }
            
            })
            .catch((error)=>{
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message); 
                } else {
                    alert("Login failed");
                }
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
    <form className='m-8 mt-5 border border-dark p-5 bg-dark text-white '   style={{borderRadius:'20px' }} onSubmit={handleSubmit}>
  <div className="mb-3">
     <h2 className='text-center  '>LOGIN </h2>
    <label  className="form-label ">Email address</label>
    <input type="email" className="form-control" value={form.email}  onChange={(e)=>{ setform({...form,email:e.target.value})}}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" value={form.password}  onChange={(e)=>{ setform({...form,password:e.target.value})}} />
  </div>
  <button type="submit" className="btn btn-primary mb-3 ">Submit</button>
  <div className='text-center mt-2'>
    <h6>New user ? <Link to={'/user/signup'} >Sign up</Link></h6>
  </div>
</form>
    </div>
    </div>
    </div>
  )
}

export default Login
