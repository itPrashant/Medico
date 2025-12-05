import React from 'react'
import './onboard-common.css'
import booking from '../../assets/bg/3744966.png'

export default function Onboard3({ onNext, onSkip }){
  return (
    <div className='onboard bg-white'>
      <button className='skip text-xs text-white font-semibold bg-blue-500 rounded-full px-2 py-1' onClick={onSkip}>Skip</button>
      <div className='illustration'>
        <img src={booking} alt='booking' />
      </div>
      <div className='top'>
        <h2 className='text-sm text-blue-500 font-bold'>Book Appointments Easily</h2>
        <p className='text-sm text-gray-700 font-semibold'>Schedule appointments with your favorite doctors in just a few taps.</p>
      </div>
      <div className='bottom'>
        <button className='next bg-blue-500 text-white' onClick={onNext}>✓</button>
      </div>
    </div>
  )
}
