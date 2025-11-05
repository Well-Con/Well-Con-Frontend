import React, { useState } from "react";
import PersonalDetails from "../Forms/Personal";
import ProfessionalDetails from "../Forms/Professional";
import Availability from "../Forms/Availability";
import Documentation from "../Forms/Documentation";
import { useLocation } from "react-router-dom";
import useDoctor from "../../../api/useDoctor";

const Signupdoctor = () => {
  const location = useLocation();
  const { email = "", password = "" } = location.state || {};
  const [step, setStep] = useState(0);
  const { registerDoctor, doctorLoading } = useDoctor();

  // ✅ form data includes everything we collect
  const [formData, setFormData] = useState({
    email,
    password,
    name: "",
    age: "",
    gender: "",
    phoneNo: "",
   
    
    education: "",// change to education
    expertise: [],// change it to expertise
    experience: "",  
    registrationNo: "",// change to registrationNo
    consultationTypes: [],
    consultationFee: "",// change to consultationFee
   

    //add  address
    address:{
      city : "",
      state : "",
      area : "",
      street : "",
      type: "",
    }
  });

  // merge child updates into parent state
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    console.log("Submitting doctor data:", formData);
    // registerDoctor(formData, (res) => {
    //   console.log("Doctor registered:", res);
    //   //redirect to dashboard page
    //   window.location.href = "/dashboard";
    // });
  };

  return (
    <>
      {step === 0 && (
        <PersonalDetails
          data={formData}
          updateFormData={updateFormData}
          nextStep={() => setStep(1)}
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
          nextStep={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <Documentation
          data={formData}
          updateFormData={updateFormData}
          submit={handleSubmit}
          loading={doctorLoading}
        />
      )}
    </>
  );
};

export default Signupdoctor;
