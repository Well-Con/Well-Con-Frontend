import React from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const DoctorSignupForm = ({ formData, handleChange, handleSignup, doctorLoading }) => {
  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSignup}>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FaGooglePlusG /></a>
          
        </div>
        <span>or use your email for registration</span>

       
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
       

        <button type="submit" disabled={doctorLoading}>
          {doctorLoading ? "Signing up..." : "Sign Up"}
        </button>
        <a href="/loginpatient">Signup as Patient</a>
      </form>
    </div>
  );
};

export default DoctorSignupForm;
