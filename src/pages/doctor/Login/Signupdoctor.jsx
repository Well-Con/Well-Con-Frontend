import React, { useState } from "react";
import PersonalDetails from "../Forms/Personal";
import ProfessionalDetails from "../Forms/Professional";
import Availability from "../Forms/Availability";
import Documentation from "../Forms/Documentation";
import { useLocation } from "react-router-dom";

import useDoctor from "../../../api/useDoctor";

const Signupdoctor = () => {
  const location = useLocation();
  const { email, password } = location.state || {};
  const [step, setStep] = useState(0); // 0=personal, 1=professional, 2=availability
  const { registerDoctor, doctorLoading } = useDoctor();

  // State for all form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    phoneNo: "",
    address: "",
    city: "",
    experties: [],
    education: [],
    gender: "",
    
  });

  // Update handler for child forms
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    registerDoctor(formData, (res) => {
      console.log("Doctor registered:", res);
      // maybe redirect here
    });
  };

  return (
    <>
      {step === 0 && (
        <PersonalDetails
          data={formData}
          updateFormData={updateFormData}
          nextStep={console.log("Moving to professional details") || (() => setStep(1))}
        />
      )}
      {step === 1 && (
        <ProfessionalDetails
          data={formData}
          updateFormData={updateFormData}
          nextStep={() => setStep(2)}
          prevStep={() => setStep(0)}
        />
      )}
      {step === 2 && (
        <Availability
          data={formData}
          updateFormData={updateFormData}
          prevStep={() => setStep(1)}
          submit={handleSubmit}
          loading={doctorLoading}
        />
      )}
    </>
  );
};

export default Signupdoctor;
