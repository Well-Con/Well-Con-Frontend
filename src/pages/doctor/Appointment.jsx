import React, { useState } from "react";

const initialRequests = [
  {
    id: 1,
    name: "Daniel Smith",
    condition: "Diabetes",
    date: "04/03/2020",
    time: "10 AM",
    status: "Accepted",
    avatar: "https://placehold.co/40x40/5e5399/ffffff?text=DS",
  },
  {
    id: 2,
    name: "Dara Herrera",
    condition: "Flu",
    date: "11/03/2020",
    time: "8 AM",
    status: "Pending",
    avatar: "https://placehold.co/40x40/5e5399/ffffff?text=DH",
  },
  {
    id: 3,
    name: "Albert Diaz",
    condition: "Cancer",
    date: "18/03/2020",
    time: "3 PM",
    status: "Pending",
    avatar: "https://placehold.co/40x40/5e5399/ffffff?text=AD",
  },
  {
    id: 4,
    name: "Edith Lyons",
    condition: "Fever",
    date: "24/03/2020",
    time: "7 AM",
    status: "Rejected",
    avatar: "https://placehold.co/40x40/5e5399/ffffff?text=EL",
  },

];

const Appointments = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  return (
    <div className="w-full h-screen pb-8 mx-auto bg-white rounded-xl shadow-lg overflow-y-auto">
      <header className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        <p className=" text-gray-500">Patient Requests</p>
      </header>

      <div>
        {requests.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition"
          >
            {/* Left side: patient info */}
            <div className="flex items-center gap-4">
              <img
                src={patient.avatar}
                alt={patient.name}
                className="h-12 w-12 rounded-full border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {patient.name}
                </h3>
                <p className="text-sm text-gray-500">{patient.condition}</p>
                <p className="text-xs text-gray-400">
                  {patient.date} • {patient.time}
                </p>
              </div>
            </div>

            {/* Right side: actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleAction(patient.id, "Accepted")}
                disabled={patient.status === "Accepted"}
                className={`px-4 py-1 rounded-lg text-sm font-medium transition
                  ${
                    patient.status === "Accepted"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
              >
                {patient.status === "Accepted" ? "Accepted" : "Accept"}
              </button>
              <button
                onClick={() => handleAction(patient.id, "Rejected")}
                disabled={patient.status === "Rejected"}
                className={`px-4 py-1 rounded-lg text-sm font-medium transition
                  ${
                    patient.status === "Rejected"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
              >
                {patient.status === "Rejected" ? "Rejected" : "Reject"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
