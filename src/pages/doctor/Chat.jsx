import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const patients = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Robert Brown' },
];

function Chat() {
  const { id } = useParams(); // grabs id from route
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const selectedPatient = patients.find((p) => p.id === id);
    setPatient(selectedPatient);
  }, [id]);

  if (!patient) {
    return <div className="p-4">Patient not found.</div>;
  }

  return (
    <div className="flex flex-col h-[500px] max-w-500px p-4">
      <h2 className="text-2xl font-semibold mb-4">Chat with {patient.name}</h2>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded-lg mb-4 p-3">
        {/* Example messages */}
        <div className="mb-2 text-left">
          <span className="inline-block bg-white p-2 rounded-lg shadow">Hi, how are you feeling?</span>
        </div>
        <div className="mb-2 text-right">
          <span className="inline-block bg-blue-500 text-white p-2 rounded-lg shadow">I’m feeling better today.</span>
        </div>
      </div>

      {/* Message Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white  rounded-lg hover:bg-blue-600 ">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
