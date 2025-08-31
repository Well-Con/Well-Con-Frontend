// Recent Patients Component
const RecentPatients = () => {
  const patients = [
    { name: 'Daniel Smith', gender: 'Male', weight: '75 kg', disease: 'Cancer', date: '29 Jan', heartRate: '56 bpm', bloodType: 'AB', status: 'Outpatient', avatar: 'https://placehold.co/40x40/5e5399/ffffff?text=DS' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Patients</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disease</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heart Rate</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full object-cover" src={patient.avatar} alt={patient.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.weight}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.disease}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.heartRate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.bloodType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{patient.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPatients;
