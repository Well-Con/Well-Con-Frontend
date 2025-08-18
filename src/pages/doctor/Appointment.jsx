import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// Custom modal component for confirmation
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-sm w-full transform transition-all duration-300 ease-in-out scale-95 md:scale-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg text-gray-700 font-medium bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const appointments = [
  {
    pid: 1,
    name: 'Rahul',
    sex: 'Male',
    category: 'Cardiologist',
    description: 'Experienced a catastrophic heart attack 5 mins ago',
    timeLog: '21:30 Hours',
    prevHistory: 'Yes',
    isAccepted: 'false'
  },
  {
    pid: 2,
    name: 'Shiva',
    sex: 'Male',
    category: 'Psychologist',
    description: "Can't sleep properly due to stress and work load. Not able to enjoy life!",
    timeLog: '18:30 Hours',
    prevHistory: 'No',
    isAccepted: 'false'
  },
  {
    pid: 3,
    name: 'Akshith',
    sex: 'Male',
    category: 'Orthopaedist',
    description: 'Fractures reported in the wrist due to excessive coding on Flutter without pause',
    timeLog: '03:30 Hours',
    prevHistory: 'Yes',
    isAccepted: 'false'
  },
  {
    pid: 4,
    name: 'Harshita',
    sex: 'Female',
    category: 'Dermatologist',
    description: 'Needs to get rid of Pimples on her skin',
    timeLog: '21:30 Hours',
    prevHistory: 'Yes',
    isAccepted: 'false'
  },
  {
    pid: 5,
    name: 'Vivek',
    sex: 'Male',
    category: 'Physician',
    description: 'Su=spected to be Covid + due to violation of Lockdown norms during Lockdown.',
    timeLog: '14:30 Hours',
    prevHistory: 'No',
    isAccepted: 'false'
  },
];

const Appointments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAcceptClick = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    // Logic to handle the "accept" action for the selected appointment
    console.log(`Appointment for ${selectedAppointment.name} has been accepted.`);
    setIsModalOpen(false);
    selectedAppointment.isAccepted = 'true'; // Update the appointment status

  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <div >
      <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <header className="p-6 md:p-8 border-b border-gray-200 bg-gray-50">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Live Cases</h1>
          <p className="text-sm text-gray-500 mt-1">CASES NOW</p>
        </header>

        <div className="p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="table-auto w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  {['PID', 'Name', 'Sex', 'Category', 'Description', 'Time Log', 'Prev History', 'Action'].map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.pid} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.pid}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.sex}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.category}</td>
                    <td className="px-6 py-4 max-w-xs text-sm text-gray-600">{appointment.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{appointment.timeLog}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.prevHistory === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {appointment.prevHistory}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium ">
                      <button
                        disabled={appointment.isAccepted === 'true'}
                        onClick={() => handleAcceptClick(appointment)}
                        style={{ backgroundColor: appointment.isAccepted === 'true' ? 'gray' : 'green' }}
                        className="w-full cursor-pointer px-4 py-2 rounded-full text-white font-medium text-xs hover:bg-green-600 shadow-md transition-all duration-200 transform hover:scale-105"
                      >
                        {appointment.isAccepted === 'true' ? 'Accepted' : 'Accept'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Confirm Acceptance"
        message={`Are you sure you want to accept the appointment for ${selectedAppointment?.name}?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Appointments;
