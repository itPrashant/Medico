import React from "react";
import "../styles/login.css";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../assets/icons/google.png";  
import facebook from "../assets/icons/facebook.png";  
import twitter from "../assets/icons/twitter.png"; 
import logo from "../assets/log-g.png";  




export default function Login() {
  const nav = useNavigate();
  return (
    <div className="login-screen">
      <div className="top-bar">
        <button className="back" onClick={() => nav(-1)}>
          ←
        </button>
      </div>

      <div className="logo-box">
        <img src={logo} alt="logo" className="Medico" />
        <p className="mt-2 text-gray-700 font-medium text-sm">Your Health and Medicine Partner</p>
      </div>

      <form className="form">
        <label className="text-gray-700 font-medium text-sm">Email Address*</label>
        <div className="input-wrap">
          <input type="email" placeholder="you@example.com" />
        </div>

        <label className="text-gray-700 font-medium text-sm">Password*</label>
        <div className="input-wrap">
          <input type="password" placeholder="••••••••" className="text-sm font-medium text-gray-700"/>
        </div>

        <div className="forgot text-sm text-blue-600 font-medium">Forgot Password?</div>

        <button
          className="signin font-medium"
          onClick={(e) => {
            e.preventDefault(); // prevent form reload
            nav("/Home");
          }}
        >
          Sign In
        </button>
      </form>

      <div className="social">
        <p className="text-gray-700 font-medium text-md">Or Sign In with</p>
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
    </div>
  );
}
