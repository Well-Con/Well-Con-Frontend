import React from "react";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import usePatient from "../../../api/usePatient";

const PatientSignupForm = ({ formData, handleChange, handleSignup, patientLoading }) => {
  const navigate = useNavigate();
  const { getPatientProfile } = usePatient();

  const handleClick = (e) => {
    e.preventDefault();

    // Check if patient already exists
    getPatientProfile(formData.email, (res) => {
      if (res?.data?.patient) {
        alert("Email already exists. Please login instead.");
        return;
      } else {
        // continue to registration
        navigate("/patientregistration", {
          state: { email: formData.email, password: formData.password },
        });
      }
    });
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleClick}>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><FaGooglePlusG /></a>
        </div>
        <span>or use your email for registration</span>

        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={patientLoading}>
          {patientLoading ? "Signing up..." : "Sign Up"}
        </button>
        <a href="/logindoctor">Sign up as Doctor</a>
      </form>
    </div>
  );
};

export default PatientSignupForm;
