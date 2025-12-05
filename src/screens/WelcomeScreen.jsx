import React from 'react'
import '../styles/welcome.css'
import help from '../assets/bg/7317077.png'
import { useNavigate } from 'react-router-dom'

export default function WelcomeScreen(){
  const nav = useNavigate()
  return (
    <div className='welcome bg-white'>
      <div className='welcome-image'>
        <img src={help} alt='help' />
      </div>
      <div className='welcome-top'>
        <h3 className='text-blue-500'>Need</h3>
        <h1 className='text-blue-500'>Medical Help?</h1>
        <p className='text-gray-700 font-medium text-md'>Let's start discussing with us!</p>
      </div>

    
      <div className='welcome-bottom bg-blue-500'>
        <button className='primary bg-white text-blue-500' onClick={()=>nav('/signup')}>Create an account</button>
        <button className='outline' onClick={()=>nav('/login')}>Sign In</button>
      </div>
    </div>
  )
}
