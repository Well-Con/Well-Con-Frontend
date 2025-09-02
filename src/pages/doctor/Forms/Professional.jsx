import React, { useState } from "react";
import DoctorProgressBar from "../contains/progress";
import { WithContext as ReactTags } from "react-tag-input";

// key codes for delimiters
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const ProfessionalDetails = ({ data, updateFormData, nextStep }) => {
  const [tags, setTags] = useState(data.specializations || []);

  // suggestions list
  const suggestions = [
    { id: "Cardiologist", text: "Cardiologist" },
    { id: "Dermatologist", text: "Dermatologist" },
    { id: "Neurologist", text: "Neurologist" },
    { id: "Pediatrician", text: "Pediatrician" },
    { id: "General Physician", text: "General Physician" },
    { id: "Psychiatrist", text: "Psychiatrist" },
    { id: "Orthopedic", text: "Orthopedic" },
  ];

  // tag input handlers
  const handleDelete = (i) => {
    const newTags = tags.filter((tag, index) => index !== i);
    setTags(newTags);
    updateFormData({ specializations: newTags.map((t) => t.text) });
  };

  const handleAddition = (tag) => {
    const newTags = [...tags, tag];
    setTags(newTags);
    updateFormData({ specializations: newTags.map((t) => t.text) });
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
    updateFormData({ specializations: newTags.map((t) => t.text) });
  };

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-screen  min-h-screen py-[50px]">
      <DoctorProgressBar currentStep={1} />

      <div className="w-full h-80vh p-8 bg-white rounded-lg shadow-lg py-[100px]">
        <h2 className="text-3xl font-bold text-center mb-6">
          Professional Details
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Qualification */}
          <input
            type="text"
            name="qualification"
            value={data.qualification || ""}
            onChange={handleChange}
            placeholder="Qualification(s)"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Specializations */}
          <div className="p-2 border border-gray-300 rounded-md">
            <label className="block text-gray-700 mb-2">Specializations</label>
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              delimiters={delimiters}
              placeholder="Type specialization..."
              autofocus={false}
              classNames={{
                tags: "flex flex-wrap gap-2",
                tag: "bg-green-500 text-white pl-3  py-1 rounded-full flex items-center",
                remove: "ml-2 text-white cursor-pointer font-bold",
                suggestions:
                  "border border-gray-300 rounded-md mt-2 bg-white shadow-md",
                activeSuggestion: "bg-green-100 cursor-pointer",
              }}
            />
          </div>

          {/* Years of Experience */}
          <input
            type="number"
            name="experience"
            value={data.experience || ""}
            onChange={handleChange}
            placeholder="Years of Experience"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Workplace */}
          <input
            type="text"
            name="workplace"
            value={data.workplace || ""}
            onChange={handleChange}
            placeholder="Current Workplace"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Registration Number */}
          <input
            type="text"
            name="registrationNumber"
            value={data.registrationNumber || ""}
            onChange={handleChange}
            placeholder="Registration Number issued by state medical council"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </form>

        <div className="flex justify-center m-6">
          <button
            type="button"
            onClick={nextStep}
            className="bg-green-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-700 transition duration-200 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
