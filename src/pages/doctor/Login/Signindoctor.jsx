import React, { useState } from "react";
import "../../../styles/Signin.css";
import useDoctor from "../../../api/useDoctor";

import DoctorSignupForm from "./DoctorSignupForm";
import DoctorSigninForm from "./DoctorSigninForm";
import DoctorToggle from "./DoctorToggle";

const Signindoctor = () => {
  const [isActive, setIsActive] = useState(false);
  const { registerDoctor, loginDoctor, doctorLoading } = useDoctor();

  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    registerDoctor(formData, (res) => {
      console.log("Doctor registered:", formData);
      // redirect after signup
    });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    loginDoctor({ email: formData.email, password: formData.password }, (res) => {
      console.log("Doctor logged in:", res);
      // redirect to dashboard
      window.location.href = "/dashboard";
    });
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <DoctorSignupForm
        formData={formData}
        handleChange={handleChange}
        handleSignup={handleSignup}
        doctorLoading={doctorLoading}
      />
      <DoctorSigninForm
        formData={formData}
        handleChange={handleChange}
        handleSignin={handleSignin}
        doctorLoading={doctorLoading}
      />
      <DoctorToggle setIsActive={setIsActive} />
    </div>
  );
};

export default Signindoctor;
