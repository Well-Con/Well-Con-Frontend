import { useNavigate } from 'react-router-dom';

const patients = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Robert Brown' },
];

function Message() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">Messages</h2>
      <div className="flex flex-col gap-2">
        {patients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => navigate(`/chat/${patient.id}`)}
            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition"
          >
           {patient.id} {patient.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Message;


