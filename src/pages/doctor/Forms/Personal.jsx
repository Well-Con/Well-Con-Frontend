import React from 'react';
import DoctorProgressBar from '../contains/progress';

const PersonalDetails = ({ data, updateFormData, nextStep }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col  w-screen  min-h-screen bg-gradient-to-r from-white-200 to-white-200 py-[50px]">
      <DoctorProgressBar currentStep={0} /> {/* 0-based index */}

      <div className="w-full  h-80vh p-8 bg-white rounded-lg shadow-lg py-[100px] ">
        <h2 className="text-3xl font-bold text-center mb-6">Personal Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 " name='name' value={data.name} onChange={handleChange} />
          <input type="number" placeholder="Age" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='age' value={data.age} onChange={handleChange} />
          
          <select
            name="gender"
            value={data.gender}
            onChange={(e) => updateFormData({ gender: e.target.value })}
            className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="text" placeholder="Phone Number" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='phoneNo' value={data.phoneNo} onChange={handleChange} />
          <input type="text" placeholder="City" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='city' value={data.city} onChange={handleChange} />
          <input type="text" placeholder="State" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='state' value={data.state} onChange={handleChange} />

        </form>
        <div className="flex justify-center m-6 ">
          <button className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-200 cursor-pointer" onClick={nextStep} >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
