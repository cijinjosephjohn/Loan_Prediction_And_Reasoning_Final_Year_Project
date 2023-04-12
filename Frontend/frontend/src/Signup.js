import React , { useState} from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import validation from './signupvalidation'
import axios from 'axios'


function Signup() {
    const [errors , setErrors] = useState({})
    const [values,setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleInput = (event) =>{
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/')
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
            <h2>Sign Up</h2>
        <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name" >Name</label>
                <input type='text' placeholder='Enter Name' 
                name = 'name' onChange={handleInput} className='form-control rounded-0'/>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="email" >Email</label>
                <input type='email' placeholder='Enter Email'name='email' 
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password" >Password</label>
                <input type='password' placeholder='Enter password' name='password'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100'>Sign up</button>
            <p></p>
            <Link to='/' className='btn btn-default border w-100 '>Login</Link>
        </form>
        </div>
        
    </div>
    </>
  )
}

export default Signup