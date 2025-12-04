import React from 'react'
import './onboard-common.css'
import consult from '../../assets/bg/3736756.png'

export default function Onboard2({ onNext, onSkip }){
  return (
    <div className='onboard bg-white'>
      <button className='skip text-sm text-white font-semibold bg-green-500 rounded-full px-2 py-1' onClick={onSkip}>Skip</button>
      <div className='illustration'>
        <img src={consult} alt='consult' />
      </div>
      <div className='top'>
        <h2 className='text-green-500 font-bold'>Consult With Specialists</h2>
        <p className='text-green-500 font-semibold'>Connect with expert doctors instantly and get trusted medical advice.</p>
      </div>
      <div className='bottom'>
        <button className='next bg-green-500 text-white' onClick={onNext}>➜</button>
      </div>
    </div>
  )
}
