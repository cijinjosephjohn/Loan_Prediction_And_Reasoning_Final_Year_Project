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
          <a class="nav-link" href="/About">About</a>
          </li>
          <li>
          <a class="nav-link" href="/">signout</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Home