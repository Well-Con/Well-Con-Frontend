import React, { useState } from 'react';
import DoctorProgressBar from '../contains/progress';

const Availability = () => {
  const [consultationTypes, setConsultationTypes] = useState([]);
  const [clinicDetails, setClinicDetails] = useState({
    name: '',
    address: '',
    contact: '',
  });

  const handleConsultationChange = (type) => {
    setConsultationTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const isInPersonSelected = consultationTypes.includes('In-person');

  return (
    <div className="flex flex-col w-screen bg-gradient-to-r from-indigo-200 to-teal-200">
      <DoctorProgressBar currentStep={2} /> {/* Step 2: Availability */}

      <div className="w-full h-80vh p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Availability & Timings</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Days of Availability */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">Days Available</label>
            <div className="flex flex-wrap gap-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <label key={day} className="inline-flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="form-checkbox text-teal-600" />
                  {day}
                </label>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">Available Time Slots</label>
            <div className="flex flex-wrap gap-4">
              {['Morning (8AM - 12PM)', 'Afternoon (12PM - 4PM)', 'Evening (4PM - 8PM)'].map((slot) => (
                <label key={slot} className="inline-flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="form-checkbox text-teal-600" />
                  {slot}
                </label>
              ))}
            </div>
          </div>

          {/* Timezone */}
          <select className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="" disabled selected>Select Time Zone</option>
            <option>IST (India Standard Time)</option>
            <option>GMT</option>
            <option>UTC</option>
            <option>PST</option>
            <option>EST</option>
          </select>

          {/* Type of Consultation */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">Type of Consultation</label>
            <div className="flex flex-wrap gap-4">
              {['Video', 'Chat', 'In-person'].map((type) => (
                <label key={type} className="inline-flex items-center gap-2 text-gray-700">
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
            className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Clinic/Hospital Details (Only if "In-person" selected) */}
          {isInPersonSelected && (
            <>
              <input
                type="text"
                placeholder="Clinic/Hospital Name"
                value={clinicDetails.name}
                onChange={(e) =>
                  setClinicDetails({ ...clinicDetails, name: e.target.value })
                }
                className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Clinic Address"
                value={clinicDetails.address}
                onChange={(e) =>
                  setClinicDetails({ ...clinicDetails, address: e.target.value })
                }
                className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Clinic Contact Number"
                value={clinicDetails.contact}
                onChange={(e) =>
                  setClinicDetails({ ...clinicDetails, contact: e.target.value })
                }
                className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </>
          )}

        </form>

        <div className="flex justify-center m-6">
          <button className="bg-teal-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-700 transition duration-200 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
