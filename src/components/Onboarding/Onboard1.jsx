import React from 'react'
import './onboard-common.css'
import illus from '../../assets/bg/5024768.png'

export default function Onboard1({ onNext, onSkip }){
  return (
    <div className='onboard bg-white'>
      <button className='skip text-xs text-white font-semibold bg-blue-500 rounded-full px-2 py-1' onClick={onSkip}>Skip</button>
      <div className='illustration'>
        <img src={illus} alt='doctor' />
      </div>
      <div className='top'>
        <h2 className='text-blue-500 font-bold'>Find Your Doctor Online</h2>
        <p className='text-sm text-gray-700 font-semibold'>Find a doctor who will take the best care of your health.</p>
      </div>
      <div className='bottom'>
        <button className='next bg-blue-500 text-white' onClick={onNext}>➜</button>
      </div>
    </div>
  )
}
