import React,{useState} from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import validation from './Homevalidation'

function Home() {
  const [errors , setErrors] = useState({})
  const [values,setValues] = useState({
    dependence: '',
    Aincome: '',
    CAincome: '',
    amount: '',
    term: '',
    history: '',
    area: ''


  })
  const navigate = useNavigate();
  const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
}
const handleSubmit = (event) =>{
  event.preventDefault();
  setErrors(validation(values))
}

  return (
    <>
    
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href="/Home"><strong>Loan Prediction & {'\n'} Reasoning</strong></a>
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item active">
            <a class="nav-link" href="/Home">HOME</a>
          </li>
          <li>
            <a class="nav-link" href="/About">ABOUT</a>
          </li>
          <li>
            <a class="nav-link" href="/">SIGNOUT</a>
          </li>
        </ul>
      </nav>
      <div className='bg-secondary'>

      <p className='bg-secondary d-flex justify-content-center pt-5 text-white'><strong>Please fill the form to know your loan eligibility</strong></p>
      <div className='d-flex justify-content-center bg-secondary  p-5'>
        <div className='bg-white p-5 rounded w-90 h-100'>
          <form action='' onSubmit={handleSubmit}>
            < div className='d-flex justify-content-evenly'>
              <div className='mb-5'>
                <label htmlFor="Gender" >Gender :  &nbsp;</label>
                <select name='Gender'>
                  <option value="grapefruit">Male</option>
                  <option value="lime">Female</option>
                  <option value="coconut">Other</option>
                </select>
              </div>
              <div className="form-check mb-5" name="married" >
                <label htmlFor='married'> Married : &nbsp;</label>

                <input type="radio" value="yes" name="married"></input>
                <label for="marriedyes">
                  yes &nbsp;
                </label>
                <input type="radio" value="no" name="married"></input>
                <label for="marriedno">
                  &nbsp;No
                </label>
              </div>

              <p></p></div>
            < div className='d-flex justify-content-evenly'>
              <div className='mb-5'>
                <label htmlFor='dependence'>Dependence :&nbsp;</label>
                <input type='text' name='dependence' onChange={handleInput}  placeholder='No: of dependence'/>
                {errors.dependence && <span className='text-danger'>{errors.dependence}</span>}

              </div>
              
              <div className='mb-5'>
                <label htmlFor='Aincome'>Applicant Income :&nbsp;</label>
                <input type='text' name='Aincome' onChange={handleInput}  placeholder='Income'></input>
          
                {errors.Aincome && <span className='text-danger'>{errors.Aincome}</span>}


              </div>
              
            </div>
            < div className='d-flex justify-content-evenly'>
              <div className="form-check mb-5" name="educated" >
                <label htmlFor='educated'> Educated : &nbsp;</label>

                <input type="radio" value="yes" name="educated"></input>
                <label for="educated">
                  yes &nbsp;
                </label>
                <input type="radio" value="no" name="educated"></input>
                <label for="educated">
                  &nbsp;No
                </label>
              </div>
              &nbsp;
              <div className='mb-5'>
                <label htmlFor='CAincome'>Co-Applicant Income :&nbsp;</label>
                <input type='text' name='CAincome' onChange={handleInput} placeholder='Income'></input>
                {errors.CAincome && <span className='text-danger'>{errors.CAincome}</span>}

              </div>
             
            </div>
            < div className='d-flex justify-content-between'>
            <div className='mb-5'>
                <label htmlFor='amount'>Loan Amount :&nbsp;</label>
                <input type='text' name='amount' onChange={handleInput}  placeholder='amount'></input>
                {errors.amount && <span className='text-danger'>{errors.amount}</span>}

              </div>
              &nbsp;
              <div className='mb-5'>
                <label htmlFor='term'>Loan amount term :&nbsp;</label>
                <input type='text' name='term' onChange={handleInput}  placeholder='term'></input>
                {errors.term && <span className='text-danger'>{errors.term}</span>}


              </div>

            </div>
            < div className='d-flex justify-content-evenly'>
            <div className='mb-5'>
                <label htmlFor='history'>Credit History :&nbsp;</label>
                <input type='text' name='history' onChange={handleInput} placeholder='credit history'></input>
                {errors.history && <span className='text-danger'>{errors.history}</span>}

              </div>
              <div className='mb-5'>
                <label htmlFor='term'>Property Area:&nbsp;</label>
                <input type='text' name='area' onChange={handleInput} placeholder='area'></input>
                {errors.area && <span className='text-danger'>{errors.area}</span>}

              </div>

            </div>
            <button type='submit' className='btn btn-success w-100'>SUBMIT </button>
          </form>
          
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Home