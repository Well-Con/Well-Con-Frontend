import React, { useState } from 'react';
import '../../styles/Signin.css';
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';

const Signindoctor = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            
          </div>
          <span>or use your email for registration</span>
          
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign Up</button>
          <a href="/loginpatient">Signup as Patient</a>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign In</button>
          <a href="/loginpatient">Signin as Patient</a>
        </form>
      </div>

      {/* Toggle Panels */}
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
    </div>
  );
};

export default Signindoctor;
