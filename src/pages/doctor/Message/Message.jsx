import React, { useState } from "react";
import PatientList from "./PatientList";
import Chat from "./Chat";

const patients = [
  { id: "1", name: "John Doe", lastMessage: "Hi, can you call me back?" },
  { id: "2", name: "Jane Smith", lastMessage: "I have a question about my appointment." },
  { id: "3", name: "Robert Brown", lastMessage: "Thanks for the quick response!" },
  { id: "4", name: "Emily White", lastMessage: "Checking in on my prescription." },
];

export default function Message() {
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const selectedPatient = patients.find((p) => p.id === selectedPatientId);

  return (
    <div className="h-full flex font-inter text-800 antialiased mb-4">
      <PatientList
        patients={patients}
        selectedPatientId={selectedPatientId}
        onSelectPatient={setSelectedPatientId}
      />
      <Chat selectedPatient={selectedPatient} />
    </div>
  );
}
