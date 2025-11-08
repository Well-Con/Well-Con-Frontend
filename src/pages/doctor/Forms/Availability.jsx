import React, { useState } from "react";
import toast from "react-hot-toast";
import DoctorProgressBar from "../contains/progress";

const Availability = ({ data, updateFormData, nextStep }) => {
  const [consultationTypes, setConsultationTypes] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);


    const handleSubmit = (e) => {
    e.preventDefault(); // called only when inputs are valid

    if (consultationTypes.length === 0) {
      toast.error("Please select at least one type of consultation");
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
    const handleAddressChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      address: {
        ...data.address,
        [name]: value,
      },
    });
  };


  const handleTimeSlotChange = (slot) => {
    const newSlots = timeSlots.includes(slot)
      ? timeSlots.filter((s) => s !== slot)
      : [...timeSlots, slot];
    setTimeSlots(newSlots);
    updateFormData({ timeSlots: newSlots });
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
              {["Online", "InPerson"].map((type) => (
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
            
            type="number"
            placeholder="Consultation Fee (₹)"
            name="consultationFee"
            value={data.consultationFee}
            onChange={handleChange}
            className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          

          {/* Address Section */}
          <div className="col-span-full border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                value={data.address?.city || ""}
                onChange={handleAddressChange}
                placeholder="City"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="state"
                value={data.address?.state || ""}
                onChange={handleAddressChange}
                placeholder="State"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="area"
                value={data.address?.area || ""}
                onChange={handleAddressChange}
                placeholder="Area"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="street"
                value={data.address?.street || ""}
                onChange={handleAddressChange}
                placeholder="Street"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="type"
                value={data.address?.type || ""}
                onChange={handleAddressChange}
                placeholder="Address Type (Home / Clinic)"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>


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
