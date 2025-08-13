import React from 'react';
import DoctorProgressBar from '../contains/progress';

const PersonalDetails = () => {
  return (
    <div className="flex flex-col   w-screen bg-gradient-to-r from-indigo-200 to-teal-200">
      <DoctorProgressBar currentStep={0} /> {/* 0-based index */}

      <div className="w-full  h-80vh p-8 bg-white rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold text-center mb-6">Personal Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 " />
          <input type="date" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <select className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="" disabled selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="text" placeholder="Phone Number" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <input type="email" placeholder="Email Address" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <input type="text" placeholder="City" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <input type="text" placeholder="State" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <input type="text" placeholder="Pincode" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
         
        </form>
        <div className="flex justify-center m-6 ">
          <button className="bg-teal-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-700 transition duration-200 cursor-pointer">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
