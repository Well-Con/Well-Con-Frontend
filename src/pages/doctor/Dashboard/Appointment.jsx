// Appointment List Component
const AppointmentList = () => {
  const appointments = [
    { name: 'Mable Clarke', condition: 'Diabetes', status: 'Finished', time: '', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=MC' },
    { name: 'Ray Clayton', condition: 'Flu', status: '', time: '12:00', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=RC' },
    { name: 'Cornelia Holland', condition: 'Diabetes', status: '', time: '14:00', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=CH' },
    { name: 'Brett Olson', condition: 'Heart Attack', status: '', time: '16:00', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=BO' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Appointment</h3>
        <div className="text-sm text-gray-500">Today</div>
      </div>
      <ul className="space-y-4">
        {appointments.map((appointment, index) => (
          <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <img src={appointment.avatar} alt={appointment.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-800">{appointment.name}</p>
                <p className="text-sm text-gray-500">{appointment.condition}</p>
              </div>
            </div>
            {appointment.status === 'Finished' ? (
              <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">Finished</span>
            ) : (
              <div className="text-lg font-bold text-gray-700">{appointment.time}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;