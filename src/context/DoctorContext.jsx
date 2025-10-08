import React, { createContext, useState, useEffect } from "react";
import useDoctor from "../api/useDoctor";

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const { getAllDoctors: fetchAllDoctors } = useDoctor();

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all doctors using async/await
  const getAllDoctors = async () => {
    setLoading(true);
    try {
      const data = await fetchAllDoctors(); // now returns array directly
      setDoctors(data || []);
    } catch (error) {
      console.error("Failed to fetch doctors", error);
      setDoctors([]);
    } finally {
      setLoading(false);
    }
  };
 const dollarSignOnetime='$';
  // Fetch single doctor by ID
  const getDoctorById = (id) => {
    return doctors.find((doc) => doc.id === id) || null;
  };

  // Search doctors by expertise or registrationNo
  const searchDoctors = (query) => {
    return doctors.filter(
      (doc) =>
        (doc.expertise &&
          doc.expertise.some((exp) =>
            exp.toLowerCase().includes(query.toLowerCase())
          )) ||
        (doc.registrationNo &&
          doc.registrationNo.toLowerCase().includes(query.toLowerCase()))
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
        dollarSignOnetime,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
