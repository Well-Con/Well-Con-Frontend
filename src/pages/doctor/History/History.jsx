import { useState, useRef, useEffect } from "react";
import { patients } from "./data";
import {
  FiFilter,
  FiSearch,
  FiUser,
  FiCalendar,
  FiClock,
  FiPhoneCall,
  FiUserCheck,
  FiAlertCircle,
} from "react-icons/fi";

const History = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  // Filter + Search logic
  const filteredPatients = patients.filter((p) => {
    if (filter === "male" && p.gender !== "Male") return false;
    if (filter === "female" && p.gender !== "Female") return false;
    if (
      search &&
      !(
        p.firstName.toLowerCase().includes(search.toLowerCase()) ||
        p.lastName.toLowerCase().includes(search.toLowerCase()) ||
        p.problem.toLowerCase().includes(search.toLowerCase())
      )
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-lg border border-gray-200 p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800"> Patient History</h1>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 border px-3 py-2 rounded-lg shadow-sm">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search patient or problem..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none text-sm w-48"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <FiFilter className="text-gray-600 text-lg" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="all">All</option>
              <option value="male">Male Patients</option>
              <option value="female">Female Patients</option>
            </select>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <ul className="space-y-4">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((p) => {
            const isExpanded = expandedId === p.id;
            const contentRef = useRef(null);

            const [maxHeight, setMaxHeight] = useState("0px");
            useEffect(() => {
              if (isExpanded && contentRef.current) {
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
              } else {
                setMaxHeight("0px");
              }
            }, [isExpanded]);

            return (
              <li
                key={p.id}
                onClick={() => setExpandedId(isExpanded ? null : p.id)}
                className={`transition-all duration-500 ease-in-out border rounded-2xl p-5 cursor-pointer shadow-sm ${
                  isExpanded
                    ? "border-green-300 shadow-md bg-green-50/40"
                    : "border-gray-200 hover:border-green-200 hover:shadow-md"
                }`}
              >
                {/* Compact View */}
                <div className="flex items-center gap-4">
                  <img
                    src={p.avatar}
                    alt={`${p.firstName} ${p.lastName}`}
                    className="h-14 w-14 rounded-full object-cover border-2 border-green-200"
                  />
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900">
                      {p.firstName} {p.lastName}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                      <FiAlertCircle className="text-red-500" size={18} />{" "}
                      {p.problem}
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium flex items-center gap-1">
                    <FiCalendar className="text-green-600" size={18} />
                    {p.nextAppointment
                      ? `${p.nextAppointment.date} • ${p.nextAppointment.time}`
                      : "No upcoming appointment"}
                  </div>
                </div>

                {/* Expanded View */}
                <div
                  ref={contentRef}
                  style={{
                    maxHeight,
                    transition: "max-height 0.5s ease",
                    overflow: "hidden",
                  }}
                  className="mt-4"
                >
                  <div className="p-5 bg-white rounded-xl border border-green-100 shadow-inner text-sm text-gray-700 grid grid-cols-2 gap-x-10 gap-y-4">
                    <p className="flex items-center gap-3">
                      <FiUser className="text-green-600" size={22} />
                      <span>
                        <span className="font-semibold">Full Name:</span>{" "}
                        {p.firstName} {p.lastName}
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <FiUserCheck className="text-blue-600" size={22} />
                      <span>
                        <span className="font-semibold">Age:</span> {p.age}
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <FiUser className="text-pink-600" size={22} />
                      <span>
                        <span className="font-semibold">Gender:</span>{" "}
                        {p.gender}
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <FiAlertCircle className="text-red-500" size={22} />
                      <span>
                        <span className="font-semibold">Problem:</span>{" "}
                        {p.problem}
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <FiCalendar className="text-purple-600" size={22} />
                      <span>
                        <span className="font-semibold">Last Visit:</span>{" "}
                        {p.lastVisitDate}
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <FiPhoneCall className="text-orange-500" size={22} />
                      <span>
                        <span className="font-semibold">Call Duration:</span>{" "}
                        {p.callDuration}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No patients found.</p>
        )}
      </ul>
    </div>
  );
};

export default History;