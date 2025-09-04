import React from "react";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const PatientSigninForm = ({ formData, handleChange, handleSignin, patientLoading }) => {
  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSignin}>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FaGooglePlusG /></a>
        </div>
        <span>or use your email password</span>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={patientLoading}>
          {patientLoading ? "Signing in..." : "Sign In"}
        </button>
        <a href="/logindoctor">Sign in as Doctor</a>
      </form>
    </div>
  );
};

export default PatientSigninForm;
