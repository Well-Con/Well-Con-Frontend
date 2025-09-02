import React from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDoctor from "../../../api/useDoctor";

const DoctorSignupForm = ({ formData, handleChange, handleSignup, doctorLoading }) => {
  const navigate = useNavigate();
  const { getDoctorProfile } = useDoctor();

 const handleClick = (e) => {
    e.preventDefault();

    // call your API wrapper
    getDoctorProfile(formData.email, (res) => {
      if (res?.data?.doctor) {
        // doctor exists
        alert("Email already exists. Please login instead.");
        return;
      } else {
        // doctor not found → continue signup
        navigate("/doctorregistration", {
          state: { email: formData.email, password: formData.password },
        });
      }
    });
    }
  return (
    <div className="form-container sign-up">
      <form  onSubmit={handleClick}>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FaGooglePlusG /></a>
          
        </div>
        <span>or use your email for registration</span>

       
        <input required type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input required type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />


        <button type="submit"  disabled={doctorLoading}>
          {doctorLoading ? "Signing up..." : "Sign Up"}
        </button>
        <a href="/loginpatient">Signup as Patient</a>
      </form>
    </div>
  );
};
export default DoctorSignupForm;
