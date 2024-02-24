import React from 'react'
import './Signup.scss'

const Signup = () => {
  return (
    <div className="signup-container">
      <span>Sign up and get exclusive <br /> special deals</span>
      <div className="signup-form">
        <input type="text" placeholder='Signup...'/>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  )
}

export default Signup