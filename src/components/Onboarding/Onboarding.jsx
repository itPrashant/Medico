import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Onboard1 from './Onboard1'
import Onboard2 from './Onboard2'
import Onboard3 from './Onboard3'
import './onboarding.css'
import { useNavigate } from 'react-router-dom'

const screens = [Onboard1, Onboard2, Onboard3]

export default function Onboarding(){
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const Screen = screens[index]

  const next = () => {
    if(index < screens.length - 1) setIndex(i => i + 1)
    else navigate('/welcome')
  }

  const back = () => {
    if(index > 0) setIndex(i => i - 1)
  }

  const skip = () => navigate('/welcome')

  return (
    <div className='onboard-wrap bg-green-500'>
      <AnimatePresence initial={false} custom={index}>
        <motion.div
          key={index}
          className='onboard-slide'
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if(info.offset.x < -80) next()
            if(info.offset.x > 80) back()
          }}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <Screen onNext={next} onBack={back} onSkip={skip} />
        </motion.div>
      </AnimatePresence>

      <div className='dots'>
        {screens.map((_, i) => (
          <button
            key={i}
            className={'dot ' + (i === index ? 'active' : '')}
            onClick={() => setIndex(i)}
            aria-label={'Go to slide ' + (i+1)}
          />
        ))}
        
      </div>
    </div>
  )
}
