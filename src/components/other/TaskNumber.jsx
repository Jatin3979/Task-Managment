import React from "react";

const TaskNumber = ({ data }) => {
  const { newTask, active, completed, failed } = data.taskCount || {};

  return (
    <div className="w-full px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="rounded-xl py-6 px-6 bg-blue-500 text-white shadow-md">
        <h2 className="text-3xl font-bold">{newTask}</h2>
        <h3 className="text-lg font-medium">New Tasks</h3>
      </div>

      <div className="rounded-xl py-6 px-6 bg-yellow-500 text-black shadow-md">
        <h2 className="text-3xl font-bold">{active}</h2>
        <h3 className="text-lg font-medium">Active</h3>
      </div>

      <div className="rounded-xl py-6 px-6 bg-green-500 text-white shadow-md">
        <h2 className="text-3xl font-bold">{completed}</h2>
        <h3 className="text-lg font-medium">Completed</h3>
      </div>

      <div className="rounded-xl py-6 px-6 bg-red-500 text-white shadow-md">
        <h2 className="text-3xl font-bold">{failed}</h2>
        <h3 className="text-lg font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
