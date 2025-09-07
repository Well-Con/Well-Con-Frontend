import React from 'react';


const PersonalPatientDetails = ({ data, updateFormData, nextStep }) => {
  const handleChange = (e) => {
     e.preventDefault();
    updateFormData({ [e.target.name]: e.target.value });
  };
    const handleSubmit = (e) => {
    e.preventDefault(); // called only when inputs are valid
    nextStep();
  };
  return (
    <div className="flex flex-col  w-screen  min-h-screen bg-gradient-to-r from-white-200 to-white-200 py-[50px]">
      {/* <PatientProgressBar currentStep={0} /> 0-based index */}

      <div className="w-full  h-80vh p-8 bg-white rounded-lg shadow-lg py-[100px] ">
        <h2 className="text-3xl font-bold text-center mb-6">Personal Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input  required  type="text" placeholder="Full Name" className="input p-4 h-max-50px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 " name='name' value={data?.name} onChange={handleChange} />
          <input required type="number" placeholder="Age" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='age' value={data?.age} onChange={handleChange} />
          
          <select
          required
            name="gender"
            value={data?.gender}
            onChange={(e) => updateFormData({ gender: e.target.value })}
            className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input required minLength={10} pattern="^[0-9]+$" type="tel" placeholder="Phone Number" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='phoneNo' value={data?.phoneNo} onChange={handleChange} />
          <input required type="text" placeholder="City" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='city' value={data?.city} onChange={handleChange} />
          <input required type="text" placeholder="State" className="input p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" name='state' value={data?.state} onChange={handleChange} />


          <div className="flex justify-center m-6 col-span-full">
          <button className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-200 cursor-pointer" type='submit'  >Submit</button>
        </div>

        </form>
        
      </div>
    </div>
  );
};

export default PersonalPatientDetails;