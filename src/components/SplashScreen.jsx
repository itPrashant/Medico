import React from "react";
import '../App.css';
import logo from "../assets/react.svg"; // your logo here

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src={logo} alt="App Logo" className="splash-logo" />
        <h2 className="splash-title">MEDCURE</h2>
        <p className="splash-subtitle">Health & Medical</p>
      </div>

      <div className="splash-pattern"></div>
    </div>
  );
};

export default SplashScreen;
