import React, { useState } from 'react';
import DoctorProgressBar from '../contains/progress';

const Documentation = ({ data, updateFormData, submit ,loading}) => {
  const [declaration, setDeclaration] = useState(false);
  const [typedSignature, setTypedSignature] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault(); // called only when inputs are valid
    if (!declaration) {
    alert("You must confirm the declaration before continuing");
    return;
  }
    submit();
  };

  const handleChange = (e) => {
     e.preventDefault();
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-screen min-h-screen py-[50px]">
      <DoctorProgressBar currentStep={3} /> {/* Step 3: Documentation */}

      <div className="w-full h-80vh p-8 bg-white rounded-lg shadow-lg py-[100px]">
        <h2 className="text-3xl font-bold text-center mb-6">Documents & Verification</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

          {/* Medical Certificate */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">Medical Registration Certificate</label>
            <input
              required
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Self-declaration */}
          <div className="md:col-span-2">
            <label className="inline-flex items-start gap-3 text-gray-700 font-medium">
              <input
                type="checkbox"
                className="form-checkbox text-green-600 mt-1"
                checked={declaration}
                onChange={() => setDeclaration(!declaration)}
                
              />
              I hereby confirm that the information provided is true and correct to the best of my knowledge.
            </label>
          </div>

          {/* Signature */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 font-medium">Signature (Optional)</label>
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              className="p-3 border border-gray-300 rounded-md w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Or type your name as signature"
              value={typedSignature}
              onChange={(e) => setTypedSignature(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          <div className="flex justify-center m-6 col-span-full">
          <button
            className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-200 cursor-pointer"
            disabled={loading}
            type="submit"
          >
            Submit
          </button>
        </div>

        </form>

        
      </div>
    </div>
  );
};

export default Documentation;
