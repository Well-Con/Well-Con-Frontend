
// Appointment Request Component
const AppointmentRequest = () => {
  const requests = [
    { name: 'Daniel Smith', condition: 'Diabetes', date: '04/03/2020', time: '10 AM', status: 'Accepted', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=DS' },
    { name: 'Dara Herrera', condition: 'Flu', date: '11/03/2020', time: '8 AM', status: 'Declined', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=DH' },
    { name: 'Albert Diaz', condition: 'Cancer', date: '18/03/2020', time: '3 PM', status: 'Declined', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=AD' },
    { name: 'Edith Lyons', condition: 'Fever', date: '24/03/2020', time: '7 AM', status: 'Pending', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=EL' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Appointment Request</h3>
        <a href="#" className="text-blue-500 text-sm font-medium hover:underline">See All</a>
      </div>
      <ul className="space-y-4">
        {requests.map((request, index) => (
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
                <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">Accepted</span>
              )}
              {request.status === 'Declined' && (
                <div className="mt-1 flex space-x-2">
                  <button className="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              {request.status === 'Pending' && (
                <div className="mt-1 flex space-x-2">
                  <button className="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </button>
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
