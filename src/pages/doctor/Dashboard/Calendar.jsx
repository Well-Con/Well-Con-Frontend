// Calendar Component
const Calendar = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = [
    null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];
  const highlightedDates = [8, 14, 21, 22];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Calendar</h3>
        <div className="flex space-x-2 text-gray-500">
          <button className="hover:text-blue-500">&lt;</button>
          <span>September 2022</span>
          <button className="hover:text-blue-500">&gt;</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {daysOfWeek.map(day => (
          <div key={day} className="font-semibold text-gray-500">{day}</div>
        ))}
        {dates.map((date, index) => (
          <div
            key={index}
            className={`p-1 rounded-full flex items-center justify-center ${
              date ? 'text-gray-700' : 'text-transparent'
            } ${highlightedDates.includes(date) ? 'bg-red-500 text-white font-bold' : ''}`}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center text-sm text-blue-500">
        <a href="#" className="hover:underline">View All</a>
      </div>
    </div>
  );
};

export default Calendar;