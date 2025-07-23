import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  // Initialize dummy data if not present
  useEffect(() => {
    const isInitialized = localStorage.getItem("employees") && localStorage.getItem("admins");
    if (!isInitialized) {
      setLocalStorage();
    }
  }, []);

  // Restore session directly
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser?.role) {
      setUser(storedUser.role);
      setLoggedInUserData(storedUser.user);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      AuthData &&
      AuthData.admins.find((e) => e.email === email && e.password === password)
    ) {
      const adminUser = AuthData.admins.find((e) => e.email === email);
      setUser("admin");
      setLoggedInUserData(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", user: adminUser }));
    } else if (AuthData) {
      const employee = AuthData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", user: employee }));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard data={loggedInUserData} onLogout={handleLogout} />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} />}
    </>
  );
};

export default App;
