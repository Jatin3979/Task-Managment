import React from "react";

// Helper function to return background color based on task status
const getStatusColor = (task) => {
  if (task.failed) return "bg-red-500";
  if (task.completed) return "bg-green-600";
  if (task.active && task.newTask) return "bg-blue-600";
  return "bg-yellow-500";
};

const TaskList = ({ data, updateTaskStatus }) => {
  const tasks = data.tasks || [];

  if (!tasks.length) {
    return <div className="text-white">No tasks assigned.</div>;
  }

  return (
    <div className="h-[55%] overflow-x-auto w-full py-5 px-4 flex gap-5 flex-nowrap mt-10 scrollbar-hide">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`h-full shrink-0 w-[300px] ${getStatusColor(
            task
          )} text-white rounded-xl p-5 shadow-md hover:scale-[1.02] transition-transform duration-300`}
        >
          <div className="flex justify-end text-sm opacity-80 mb-2">
            {task.taskDate}
          </div>
          <h2 className="mt-1 text-xl font-semibold">{task.taskTitle}</h2>
          <p className="text-sm mt-2 text-white/90">{task.taskDescription}</p>
          <p className="text-xs mt-3 opacity-80">Category: {task.category}</p>

          <div className="mt-4 space-x-2">
            <button
              onClick={() => updateTaskStatus(index, "completed")}
              className="bg-green-700 text-green-700 font-semibold px-3 py-1 rounded text-xs"
            >
              Mark Completed
            </button>
            <button
              onClick={() => updateTaskStatus(index, "failed")}
              className="bg-red-700 text-red-600 font-semibold px-3 py-1 rounded text-xs"
            >
              Mark Failed
            </button>
            <button
              onClick={() => updateTaskStatus(index, "active")}
              className="bg-yellow-700 text-yellow-600 font-semibold px-3 py-1 rounded text-xs"
            >
              Mark Active
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
