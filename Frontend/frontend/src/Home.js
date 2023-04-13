import React from 'react'

function Home() {
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
          <form action=''>
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
                <input type='text' name='dependence' placeholder='No: of dependence'></input>

              </div>
              
              <div className='mb-5'>
                <label htmlFor='Aincome'>Applicant Income :&nbsp;</label>
                <input type='text' name='Aincome' placeholder='Income'></input>

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
                <input type='text' name='CAincome' placeholder='Income'></input>

              </div>
             
            </div>
            < div className='d-flex justify-content-between'>
            <div className='mb-5'>
                <label htmlFor='amount'>Loan Amount :&nbsp;</label>
                <input type='text' name='amount' placeholder='amount'></input>

              </div>
              &nbsp;
              <div className='mb-5'>
                <label htmlFor='term'>Loan amount term :&nbsp;</label>
                <input type='text' name='term' placeholder='term'></input>

              </div>

            </div>
            < div className='d-flex justify-content-evenly'>
            <div className='mb-5'>
                <label htmlFor='history'>Credit History :&nbsp;</label>
                <input type='text' name='history' placeholder='credit history'></input>

              </div>
              <div className='mb-5'>
                <label htmlFor='term'>Property Area:&nbsp;</label>
                <input type='text' name='area' placeholder='area'></input>

              </div>

            </div>

          </form>
          <button type='submit' className='btn btn-success w-100'>SUBMIT </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home