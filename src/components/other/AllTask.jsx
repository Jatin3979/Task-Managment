import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const AuthData = useContext(AuthContext);

  if (!AuthData?.employees) return <div>Loading tasks...</div>;

  return (
    <div className="bg-[#1C1C1C] p-6 mt-10 rounded-xl shadow-inner">
      <h2 className="text-2xl text-white font-semibold mb-6">
        Team Task Overview
      </h2>

      <div className="space-y-4 max-h-[500px] overflow-auto pr-2">
        {AuthData.employees.map((emp, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center shadow"
          >
            {/* Employee Name */}
            <h3 className="text-white text-lg font-semibold mb-2 md:mb-0">
              {emp.firstName}
            </h3>

            {/* Task Summary */}
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <span className="bg-yellow-600 text-black px-3 py-1 rounded-full">
                Active: {emp.taskCount?.active || 0}
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                New: {emp.taskCount?.newTask || 0}
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                Completed: {emp.taskCount?.completed || 0}
              </span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full">
                Failed: {emp.taskCount?.failed || 0}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
