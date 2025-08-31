import React from "react";

function PatientList({ patients, selectedPatientId, onSelectPatient }) {
  return (
    <div className="w-[30%] flex flex-col bg-white rounded-l-2xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold mb-2">My Patients</h1>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search Patient..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
          />
        </div>

        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`p-4 cursor-pointer hover:bg-gray-100 transition border-b border-gray-200 ${
              selectedPatientId === patient.id ? "bg-green-100" : ""
            }`}
            onClick={() => onSelectPatient(patient.id)}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{patient.name}</h3>
                <p className="text-sm text-gray-500 truncate">
                  {patient.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientList;
