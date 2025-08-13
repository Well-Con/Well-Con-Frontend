import React from 'react';
import DoctorProgressBar from '../contains/progress';

const ProfessionalDetails = () => {
  return (
    <div className="flex flex-col w-screen bg-gradient-to-r from-indigo-200 to-teal-200">
      <DoctorProgressBar currentStep={1} /> {/* 1 for Professional Details step */}

      <div className="w-full h-80vh p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Professional Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Qualification(s) e.g., MBBS, MD"
            className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Specialization e.g., Cardiologist"
            className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="number"
            placeholder="Years of Experience"
            className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Current Workplace"
            className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Registration Number"
            className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <div className="md:col-span-2">
            
          </div>
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

export default ProfessionalDetails;
