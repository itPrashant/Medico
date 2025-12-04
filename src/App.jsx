import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Onboarding from './components/Onboarding/Onboarding'
import WelcomeScreen from './screens/WelcomeScreen'
import Login from './screens/Login'
import Signup from './screens/Signup'
import './index.css'
import Home from './pages/Home/Home'
import DoctorsList from './pages/DoctorsList'
import Pharmacy from './pages/Pharmacy'
import Products from './pages/Products'
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Onboarding />} />
        <Route path='/welcome' element={<WelcomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctorsList" element={<DoctorsList />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
