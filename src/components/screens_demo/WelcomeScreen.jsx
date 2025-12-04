import React from "react";
import '../css/WelcomeScreen.css';
import medicalImg from "../assets/medical-help.png"; // add your illustration

const WelcomeScreen = ({ onCreateAccount, onSignIn }) => {
  return (
    <div className="welcome-container">

      <div className="welcome-top">
        <h3 className="welcome-small">Need</h3>
        <h1 className="welcome-title">Medical Help?</h1>
        <p className="welcome-sub">
          Let's start discussing with us!
        </p>
      </div>

      <div className="welcome-image-box">
        <img src={medicalImg} className="welcome-image" alt="Medical Help" />
      </div>

      <div className="welcome-bottom">
        <button className="create-btn bg-green-500" onClick={onCreateAccount}>
          Create an account
        </button>

        <button className="signin-btn" onClick={onSignIn}>
          Sign In
        </button>
      </div>

    </div>
  );
};

export default WelcomeScreen;
