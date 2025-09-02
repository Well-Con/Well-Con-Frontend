import React, { useState } from "react";
// Appointment Request Component
const AppointmentRequest = () => {
   const requests = [
    { id: 1, name: 'Daniel Smith', condition: 'Diabetes', date: '04/03/2020', time: '10 AM', status: 'Accepted', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=DS' },
    { id: 2, name: 'Dara Herrera', condition: 'Flu', date: '11/03/2020', time: '8 AM', status: 'Pending', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=DH' },
    { id: 3, name: 'Albert Diaz', condition: 'Cancer', date: '18/03/2020', time: '3 PM', status: 'Pending', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=AD' },
    { id: 4, name: 'Edith Lyons', condition: 'Fever', date: '24/03/2020', time: '7 AM', status: 'Rejected', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=EL' },
  ];

  const [appointments, setAppointment] = useState(requests);

  const updateStatus = (id, newStatus) => {
    setAppointment((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };



  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Appointment Request</h3>
        <a href="/appointments" className="text-blue-500 text-sm font-medium hover:underline">See All</a>
      </div>
      <ul className="space-y-4">
        {appointments.map((request, index) => (
          <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <img src={request.avatar} alt={request.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-800">{request.name}</p>
                <p className="text-sm text-gray-500">{request.condition}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-700">{request.date} - {request.time}</p>
              {request.status === 'Accepted' && (
                <span className="inline-block mt-1 px-3 py-1 text-xs  text-white bg-gray-500 rounded-full">Accepted</span>
              )}
              {request.status === 'Pending' && (
                <div className="mt-1 flex space-x-2">
                  <button className="w-full cursor-pointer px-4 py-2 rounded-full text-white bg-green-500 font-medium text-xs hover:bg-green-600 shadow-md transition-all duration-200 transform hover:scale-105"  onClick={() => updateStatus(request.id, "Accepted")}>Accept</button>
                  <button className="w-full cursor-pointer px-4 py-2 rounded-full text-white bg-red-500 font-medium text-xs hover:bg-red-600 shadow-md transition-all duration-200 transform hover:scale-105"  onClick={() => updateStatus(request.id, "Rejected")}>Reject</button>

                </div>
              )}
              {request.status === 'Rejected' && (
                <div >
                  <span className="inline-block mt-1 px-3 py-1 text-xs  text-white bg-orange-500 rounded-full">Rejected</span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentRequest;
