import React from "react";

const DoctorToggle = ({ setIsActive }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1 id="welcome">Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button className="hidd" onClick={() => setIsActive(false)}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Doctor!</h1>
          <p>Register with your personal details</p>
          <button className="hidd" onClick={() => setIsActive(true)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorToggle;
