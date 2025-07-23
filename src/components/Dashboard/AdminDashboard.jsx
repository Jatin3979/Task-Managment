import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({data,onLogout}) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-6">
      <Header data={data} onLogout={onLogout}/>
      <CreateTask/>
      <div className="max-w-4xl mx-auto">
        <AllTask />
      </div>
     
    </div>
  );
};

export default AdminDashboard;
