import React from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../TaskList/TaskList";
import EmployeeTasks from "../TaskList/EmployeeTasks";

const EmployeeDashboard = ({ data, onLogout }) => {
 

  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen ">
        <Header data={data} onLogout={onLogout} />
        <EmployeeTasks employee={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
