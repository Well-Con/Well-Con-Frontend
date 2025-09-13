import React, { useState } from "react";
import "../../../styles/Signin.css";
import usePatient from "../../../api/usePatient";

import PatientSignupForm from "./PatientSignupForm";
import PatientSigninForm from "./PatientSigninForm";
import PatientToggle from "./PatientToggle";

const SigninPatient = () => {
  
  const [isActive, setIsActive] = useState(false);
  const { registerPatient, loginPatient, patientLoading } = usePatient();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    registerPatient(formData, (res) => {
      console.log("Patient registered:", formData);
      // redirect after signup
    });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    loginPatient({ email: formData.email, password: formData.password }, (res) => {
      console.log("Patient logged in:", res);
      // redirect to patient dashboard
      window.location.href = "/patientdashboard";
    });
  };

  return (
    <div>
      <p>Signin as Doctor</p>
    <div className="signin-wrapper">
      <p>Signin as Doctor</p>
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <PatientSignupForm
        formData={formData}
        handleChange={handleChange}
        handleSignup={handleSignup}
        patientLoading={patientLoading}
      />
      <PatientSigninForm
        formData={formData}
        handleChange={handleChange}
        handleSignin={handleSignin}
        patientLoading={patientLoading}
      />
      <p>Signin as Doctor</p>
      <PatientToggle setIsActive={setIsActive} />
      
    </div>
    <p>Signin as Doctor</p>
    </div>

    <p>Signin as Doctor</p>
    </div>
  );
};

export default SigninPatient;
