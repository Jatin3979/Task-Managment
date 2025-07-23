import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admins: [] });

  // A reusable function to refresh user data from localStorage
  const refreshUserData = () => {
    const { employees = [], admins = [] } = getLocalStorage() || {};
    setUserData({ employees, admins });
  };

  useEffect(() => {
    refreshUserData(); // Load data on initial mount
  }, []);

  return (
    <AuthContext.Provider value={{...userData , refreshUserData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
