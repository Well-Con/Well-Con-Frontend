import React, { useState } from "react";
import PersonalPatientDetails from "../Forms/Personal";


import { useLocation } from "react-router-dom";
import usePatient from "../../../api/usePatient";

const Signuppatient = () => {
  const location = useLocation();
  const { email = "", password = "" } = location.state || {};
  
  const { registerPatient, patientLoading } = usePatient();

  // ✅ form data includes everything we collect
  const [formData, setFormData] = useState({
    email,
    password,
    name: "",
    age: "",
    gender: "",
    phoneNo: "",
    city: "",
    state: "",
  });

  // merge child updates into parent state
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    console.log("Submitting patient data:", formData);
    registerPatient(formData, (res) => {
      console.log("Patient registered:", res);
      //redirect to dashboard page
      window.location.href = "/PatientDashboard";
    });
  };

  return (
    <>
      <PersonalPatientDetails
        data={formData}
        updateFormData={updateFormData}
        nextStep={() => handleSubmit()}
      />
    </>
  );
};

export default Signuppatient;
