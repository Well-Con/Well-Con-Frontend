import React, { useState } from "react";
import DoctorProgressBar from "../contains/progress";

const Availability = ({ data, updateFormData, nextStep }) => {
  const [consultationTypes, setConsultationTypes] = useState([]);
  const [clinicDetails, setClinicDetails] = useState({
    name: "",
    address: "",
    contact: "",
  });

    const handleSubmit = (e) => {
    e.preventDefault(); // called only when inputs are valid
    if (timeSlots.length === 0) {
    alert("Please select at least one time slot");
    return;
  }
    if (consultationTypes.length === 0) {
      alert("Please select at least one type of consultation");
      return;
    } 
  
    nextStep();
  };

  const handleConsultationChange = (type) => {
    const newTypes = consultationTypes.includes(type)
      ? consultationTypes.filter((t) => t !== type)
      : [...consultationTypes, type];

    setConsultationTypes(newTypes);
    updateFormData({ consultationTypes: newTypes });
  };


  const [timeSlots, setTimeSlots] = useState([]);

  const handleTimeSlotChange = (slot) => {
    const newSlots = timeSlots.includes(slot)
      ? timeSlots.filter((s) => s !== slot)
      : [...timeSlots, slot];
    setTimeSlots(newSlots);
    updateFormData({ timeSlots: newSlots });   // ✅ update parent
  };
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const isInPersonSelected = consultationTypes.includes("In-person");

  return (
    <div className="flex flex-col w-screen  min-h-screen py-[50px]">
      <DoctorProgressBar currentStep={2} />

      {/* Step 2: Availability */}
      <div className="w-full h-80vh p-8 bg-white rounded-lg shadow-lg py-[100px]">
        <h2 className="text-3xl font-bold text-center mb-6">
          Availability & Timings
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>


          {/* Time Slots */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">
              Available Time Slots
            </label>
            <div className="flex flex-wrap gap-4">
              {[
                "Morning (8AM - 12PM)",
                "Afternoon (12PM - 4PM)",
                "Evening (4PM - 8PM)",
              ].map((slot) => (
                <label
                  key={slot}
                  className="inline-flex items-center gap-2 text-gray-700"
                >
                  <input
                    
                    type="checkbox"
                    className="form-checkbox text-teal-600"
                    checked={timeSlots.includes(slot)}
                    onChange={() => handleTimeSlotChange(slot)}
                  />
                  {slot}

                </label>
              ))}
            </div>
          </div>



          {/* Type of Consultation */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">
              Type of Consultation
            </label>
            <div className="flex flex-wrap gap-4">
              {["Video", "Chat", "In-person"].map((type) => (
                <label
                  key={type}
                  className="inline-flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox text-teal-600"
                    checked={consultationTypes.includes(type)}
                    onChange={() => handleConsultationChange(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Consultation Fee */}
          <input
            required
            type="number"
            placeholder="Consultation Fee (₹)"
            name="Fee"
            value={data.Fee}
            onChange={handleChange}
            className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Clinic/Hospital Details (Only if "In-person" selected) */}
          {isInPersonSelected && (
            <>
              <input
                required
                type="text"
                placeholder="Clinic/Hospital Name"
                name="Clinic Name"
                value={clinicDetails.name}
                onChange={(e) => {
                  const updated = { ...clinicDetails, name: e.target.value };
                  setClinicDetails(updated);
                  updateFormData({ clinicDetails: updated });
                }}
                className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                required
                type="text"
                placeholder="Clinic Address"
                name="Clinic Address"
                value={clinicDetails.address}
                onChange={(e) => {
                  const updated = { ...clinicDetails, name: e.target.value };
                  setClinicDetails(updated);
                  updateFormData({ clinicDetails: updated });
                }}
                className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                required
                type="text"
                placeholder="Clinic Contact Number"
                name="Clinic Contact Number"
                value={clinicDetails.contact}
               onChange={(e) => {
                  const updated = { ...clinicDetails, name: e.target.value };
                  setClinicDetails(updated);
                  updateFormData({ clinicDetails: updated });
                }}
                className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </>
          )}


          <div className="flex justify-center m-6 col-span-full">
          <button className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-200 cursor-pointer" type="submit">
            Submit
          </button>
        </div>
        </form>

        
        
      </div>
    </div>
  );
};

export default Availability;
