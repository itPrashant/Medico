import React from 'react'
import '../styles/signup.css'
import { useNavigate } from 'react-router-dom'
import google from "../assets/icons/google.png";  
import facebook from "../assets/icons/facebook.png";  
import twitter from "../assets/icons/twitter.png"; 

export default function Signup(){
  const nav = useNavigate()
  return (
    <div className='signup-screen'>
      <div className='top-bar'><button className='back' onClick={()=>nav(-1)}>←</button></div>

      <div className='title'>
        <h1 className='text-green-500'>Create New Account</h1>
        <p className='text-gray-700 font-medium'>Enter your details to create account</p>
      </div>

      <form className='form'>
        <label className="text-gray-700 font-medium text-sm">Name*</label>
        <input type='text' placeholder='Lucy Martin' className='text-sm' />

        <label className="text-gray-700 font-medium text-sm">Email*</label>
        <input type='email' placeholder='lucy@gmail.com' className='text-sm'/>

        <label className="text-gray-700 font-medium text-sm">Password*</label>
        <input type='password' placeholder='••••••••' className='text-sm' />

        <button className='create font-medium'>Sign Up</button>
      </form>

      <div className='social'>
        <p className='text-gray-700 font-medium text-md'>Or Sign Up with</p>
        <div className="social-btn flex justify-center gap-4 mt-3">
          {/* <button>G</button>
          <button>f</button>
          <button>t</button> */}
          <div className="">
              <img className="w-8 h-8" src={google} alt="google"></img>
          </div>
          <div className="">
            <img className="w-8 h-8" src={facebook} alt="facebook"></img>
            
          </div>
          <div className="">
            <img className="w-8 h-8" src={twitter} alt="twitter"></img>
          </div>
        </div>
      </div>

      <div className='footer text-blue-600 text-sm'>Already have an Account? <span onClick={()=>nav('/login')}>Sign In</span></div>
    </div>
  )
}
