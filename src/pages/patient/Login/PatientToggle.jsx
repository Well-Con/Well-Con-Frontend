import React from "react";
import '../../../styles/patientlogin.css';

const PatientToggle = ({ setIsActive }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1 id="welcome">Welcome Back!</h1>
          <p>Enter your personal details to use all site features</p>
          <button className="hidd" onClick={() => setIsActive(false)}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right rightwala">
          <h1>Hello, Patient!</h1>
          <p>Register with your personal details</p>
          <button className="hidd" onClick={() => setIsActive(true)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientToggle;
