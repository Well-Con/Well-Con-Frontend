import React, { createContext, useState } from "react";

// 1️⃣ Create context
export const UserContext = createContext();

// 2️⃣ Provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Optional: you can add logout, update, etc.
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
