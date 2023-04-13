import React from 'react'

function About() {
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
    <div className='d-flex justify-content-center align-items-center p-5 '><h5>This page predicts the eligibility of your personal loan application. In this site, when a loan applicant applies for a 
      loan,the ML model predicts the outcome based on the attributes given by user. If the attributes of 
      the user passes the loan criteria then the loan is marked as eligible else, the loan gets marked as not eligible. 
      Explainable AI used in our website, LIME explains the reason for rejection your loan application.</h5></div>
    </>
  )
}

export default About