import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './validation'
import axios  from 'axios';



function Login() {
    const [errors , setErrors] = useState({})
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleInput = (event) =>{
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if(res.data === "Success"){
                        navigate('/Home')
                    }
                    else{
                        alert("No record Existed")
                    }
                    
                })
                    
                .catch(err => console.log(err));
            
        }
    }
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href="/"><strong>Loan Prediction & {'\n'} Reasoning</strong></a>
        </nav>
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2>Log in</h2>
        <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email" >Email</label>
                <input type='email' placeholder='Enter Email' onChange={handleInput} name = 'email' 
                className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password" >Password</label>
                <input type='password' placeholder='Enter password' onChange={handleInput} name='password' 
                className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type = "submit" className='btn btn-success w-100'>Log in</button>
            <p></p>
            <Link to='/signup' className='btn btn-default border w-100 '>Create Account</Link>
        </form>
        </div>
        
    </div>
    </>
  )
}

export default Login