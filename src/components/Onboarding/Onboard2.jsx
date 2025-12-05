import React from 'react'
import './onboard-common.css'
import consult from '../../assets/bg/3736756.png'

export default function Onboard2({ onNext, onSkip }){
  return (
    <div className='onboard bg-white'>
      <button className='skip text-xs text-white font-semibold bg-blue-500 rounded-full px-2 py-1' onClick={onSkip}>Skip</button>
      <div className='illustration'>
        <img src={consult} alt='consult' />
      </div>
      <div className='top'>
        <h2 className='text-blue-500 font-bold'>Consult With Specialists</h2>
        <p className='text-sm text-gray-700 font-semibold'>Connect with expert doctors instantly and get trusted medical advice.</p>
      </div>
      <div className='bottom'>
        <button className='next bg-blue-500 text-white' onClick={onNext}>➜</button>
      </div>
    </div>
  )
}
