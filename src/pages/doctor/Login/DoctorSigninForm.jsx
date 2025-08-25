import React from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const DoctorSigninForm = ({ formData, handleChange, handleSignin, doctorLoading }) => {
  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSignin}>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FaGooglePlusG /></a>
          
        </div>
        <span>or use your email password</span>

        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit" disabled={doctorLoading}>
          {doctorLoading ? "Signing in..." : "Sign In"}
        </button>
        <a href="/loginpatient">Signin as Patient</a>
      </form>
    </div>
  );
};

export default DoctorSigninForm;
