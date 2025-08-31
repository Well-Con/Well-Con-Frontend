// Profile and Patient Stats Component
export default function ProfileAndStats() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Good Morning Dr. Kim!</h2>
      <div className="mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-2/3 bg-gradient-to-br from-purple-200 to-blue-200 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-700">Visits for Today</h3>
            <p className="text-5xl font-extrabold text-purple-700 mt-2">104</p>
          </div>
          <div className="flex-1 mt-4 sm:mt-0 sm:ml-8 flex space-x-4 justify-center sm:justify-end">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-700">New Patients</h4>
              <p className="text-3xl font-bold text-green-500 mt-1">40</p>
              <div className="flex items-center justify-center text-sm text-green-500 mt-1">
                51% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.293l4.146 4.147a.5.5 0 01-.708.708L10 7.707l-3.444 3.444a.5.5 0 01-.708-.708L9 6.707V12a.5.5 0 01-1 0V7a.5.5 0 011 0V6.707z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-700">Old Patients</h4>
              <p className="text-3xl font-bold text-red-500 mt-1">64</p>
              <div className="flex items-center justify-center text-sm text-red-500 mt-1">
                20% <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.293l4.146 4.147a.5.5 0 01-.708.708L10 7.707l-3.444 3.444a.5.5 0 01-.708-.708L9 6.707V12a.5.5 0 01-1 0V7a.5.5 0 011 0V6.707z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 p-4">
          <img src="https://placehold.co/200x200/5e5399/ffffff?text=Dr.Kim" alt="Dr. Kim" className="rounded-full mx-auto w-32 h-32 object-cover shadow-xl" />
        </div>
      </div>
    </div>
  );
};
