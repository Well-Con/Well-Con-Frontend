import React from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorSignupForm = ({ formData, handleChange, handleSignup, doctorLoading }) => {
  const navigate = useNavigate();

  const handleClick = () => {

    console.log("request aai")
    navigate('/doctorregistration', { state: { email: formData.email, password: formData.password } }); // Navigate to the '/about' route defined in your React Router setup
  };
  return (
    <div className="form-container sign-up">
      <form >
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FaGooglePlusG /></a>
          
        </div>
        <span>or use your email for registration</span>

       
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
       

        <button type="submit" onClick={handleClick} disabled={doctorLoading}>
          {doctorLoading ? "Signing up..." : "Sign Up"}
        </button>
        <a href="/loginpatient">Signup as Patient</a>
      </form>
    </div>
  );
};
export default DoctorSignupForm;
