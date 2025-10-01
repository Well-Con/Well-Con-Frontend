import React, { createContext, useState, useEffect } from "react";
import useDoctorApi from "../api/useDoctor"; // your API hooks

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const { getAllDoctors: fetchAllDoctors } = useDoctorApi(); // your API method
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all doctors
  const getAllDoctors = async () => {
    setLoading(true);
    fetchAllDoctors((res) => {
      setLoading(false);
      if (res?.success) {
        setDoctors(res.data);
      } else {
        setDoctors([]);
        console.error("Failed to fetch doctors");
      }
    });
  };

  // Fetch single doctor by ID
  const getDoctorById = (id) => {
    return doctors.find((doc) => doc._id === id) || null;
  };  

  // Optional: Search doctors by name or expertise
  const searchDoctors = (query) => {
    return doctors.filter(
      (doc) =>
        doc.user.name.toLowerCase().includes(query.toLowerCase()) ||
        (doc.expertise &&
          doc.expertise.some((exp) =>
            exp.toLowerCase().includes(query.toLowerCase())
          ))
    );
  };

  // Automatically fetch all doctors on mount
  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <DoctorContext.Provider
      value={{
        doctors,
        loading,
        getAllDoctors,
        getDoctorById,
        searchDoctors,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
