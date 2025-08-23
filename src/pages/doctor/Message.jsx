import React, { useState } from 'react';

// This is a single, self-contained React application.
// All components and code are within this file.

// Mock data for the patients list.
const patients = [
  { id: '1', name: 'John Doe', lastMessage: 'Hi, can you call me back?' },
  { id: '2', name: 'Jane Smith', lastMessage: 'I have a question about my appointment.' },
  { id: '3', name: 'Robert Brown', lastMessage: 'Thanks for the quick response!' },
  { id: '4', name: 'Emily White', lastMessage: 'Checking in on my prescription.' },
];

// PatientList component that displays a list of patients.
function PatientList({ patients, selectedPatientId, onSelectPatient }) {
  return (
    <div className="w-[30%] flex flex-col bg-white rounded-l-2xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold  mb-2">My Patients</h1>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search Patient..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
          />
        </div>
        
        {/* Mapping through the patients array to create the list items */}
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`p-4 cursor-pointer hover:bg-gray-100 transition border-b border-gray-200 ${
              selectedPatientId === patient.id ? 'bg-green-100' : ''
            }`}
            onClick={() => onSelectPatient(patient.id)}
          >
            <div className="flex items-center gap-4">
              {/* Placeholder for a profile picture or avatar */}
              <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                <i class="fa-solid fa-user"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{patient.name}</h3>
                <p className="text-sm text-gray-500 truncate">{patient.lastMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Chat component that displays the chat UI for a selected patient.
function Chat({ selectedPatient }) {
  return (
    <div className="w-[70%] flex flex-col bg-white rounded-r-2xl shadow-lg border-t border-r border-b border-gray-200">
      {selectedPatient ? (
        // Renders the chat view if a patient is selected
        <div className="flex flex-col h-full">
          {/* Chat header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                <i class="fa-solid fa-user"></i>
              </div>

              <div>
                <h2 className="text-2xl font-bold">{selectedPatient.name}</h2>
                
              </div>
            </div>
            {/* Header icons */}
            <div className="flex gap-4 text-gray-500">
              <button aria-label="Search chat" className="hover:text-green-500 transition">
                <i className="fa-solid fa-magnifying-glass w-6 h-6 cursor-pointer"></i>
              </button>
              <button aria-label="Video call" className="hover:text-green-500 transition">
                <i className="fa-solid fa-video w-6 h-6 cursor-pointer"></i>
              </button>
            </div>
          </div>
          
          {/* Chat messages area */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50 rounded-b-2xl">
            {/* Example messages */}
            <div className="flex justify-start mb-4">
              <span className="inline-block bg-white p-3 rounded-xl shadow-sm max-w-sm">
                Hi, how are you feeling?
              </span>
            </div>
            <div className="flex justify-end mb-4">
              <span className="inline-block bg-green-600 text-white p-3 rounded-xl shadow-sm max-w-sm">
                I’m feeling better today.
              </span>
            </div>
            <div className="flex justify-start mb-4">
              <span className="inline-block bg-white p-3 rounded-xl shadow-sm max-w-sm">
                That's great to hear! Let me know if you need anything else.
              </span>
            </div>
            <div className="flex justify-end mb-4">
              <span className="inline-block bg-green-600 text-white p-3 rounded-xl shadow-sm max-w-sm">
                I will, thank you!
              </span>
            </div>
          </div>

          {/* Message input area */}
          <div className="p-6 border-t border-gray-200 flex items-center gap-2">
            <button aria-label="Attach file" className="text-gray-500 hover:text-green-500 transition">
              <i className="fa-solid fa-paperclip w-6 h-6 cursor-pointer"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        // Renders the default view if no patient is selected
        <div className="flex flex-col items-center justify-center h-full text-500 p-6 text-center">
          <i className="fa-brands fa-slack fa-2x text-green-500"></i>
          <h2 className="text-[27.42px] text-green-500 pl-4">Well-Con</h2>
        
          <p className="mt-2 ">Please select a patient from the list.</p>
        </div>
      )}
    </div>
  );
}

// Main App component that holds the entire UI.
export default function Message() {
  // State to keep track of the currently selected patient's ID.
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // Find the selected patient object based on the ID.
  const selectedPatient = patients.find(p => p.id === selectedPatientId);

  // The main layout is a flex container that splits the screen into two columns.
  return (
    <div className="h-full  flex font-inter text-800 antialiased mb-4">
      {/* Left panel for the patient list */}
      <PatientList
        patients={patients}
        selectedPatientId={selectedPatientId}
        onSelectPatient={setSelectedPatientId}
      />
      
      {/* Right panel for the chat window */}
      <Chat
        selectedPatient={selectedPatient}
      />
    </div>
  );
}
