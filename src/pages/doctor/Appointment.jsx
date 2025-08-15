
import '../../styles/Appointment.css';
const appointments = [
  {
    id: 1,
    patientName: 'Jane Doe',
    patientInfo: '28 years old, New Patient',
    time: '10:00 AM - 10:30 AM'
  },
  {
    id: 2,
    patientName: 'John Smith',
    patientInfo: '35 years old, Follow-up',
    time: '11:00 AM - 11:30 AM'
  },
  {
    id: 3,
    patientName: 'Emily White',
    patientInfo: '45 years old, Annual Check-up',
    time: '1:00 PM - 1:30 PM'
  },
];
const Appointments = () => {
const handleAccept = (appointmentId) => {
    console.log(`Appointment with ID ${appointmentId} accepted.`);
    // Here you would typically add logic to update the appointment status in your database
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Appointments</h1>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="w-full bg-white shadow-lg rounded-lg p-4 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                {/* Patient Initial Circle */}
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">
                  {appointment.patientName.charAt(0)}
                </div>
                {/* Patient Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-bold text-gray-900 truncate">
                    {appointment.patientName}
                  </p>
                  <p className="text-sm text-gray-500 truncate mt-1">
                    <span className="text-gray-600 font-medium">{appointment.patientInfo}</span> | <span className="text-blue-600">{appointment.time}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Accept Button */}
            <div className="flex-shrink-0 ml-4">
              <button
                onClick={() => handleAccept(appointment.id)}
                className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Appointments;


