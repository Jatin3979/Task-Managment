import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { refreshUserData } = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskdescription, settaskdescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [asignTo, setasignTo] = useState("");
  const [category, setcategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      taskdescription,
      taskDate,
      category,
      failed: false,
      active: false,
      newTask: true,
      completed: false,
    };
    const data = JSON.parse(localStorage.getItem("employees"));

    // Find the employee by name
    const employeeIndex = data.findIndex((emp) => emp.firstName === asignTo);

    if (employeeIndex === -1) {
      alert("Employee not found.");
      return;
    }

    // Push new task into the selected employee's task list
    data[employeeIndex].tasks.push(newTask);

    // Update task count
    data[employeeIndex].taskCount.newTask += 1;
    // Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(data));
    refreshUserData();

    // Clear form
    settaskTitle("");
    settaskdescription("");
    settaskDate("");
    setasignTo("");
    setcategory("");

    alert("Task assigned successfully!");
  };

  return (
    <div className="mt-10 max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-md">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-6"
      >
        <div>
          <h3 className="text-lg font-medium mb-1">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => {
              settaskTitle(e.target.value);
            }}
            type="text"
            placeholder="Make a UI design"
            className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">Description</h3>
          <textarea
            value={taskdescription}
            onChange={(e) => {
              settaskdescription(e.target.value);
            }}
            rows="5"
            placeholder="Task details..."
            className="w-full bg-gray-700 text-white p-3 rounded-lg resize-none outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => {
              settaskDate(e.target.value);
            }}
            type="date"
            className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">Assign To</h3>
          <input
            value={asignTo}
            onChange={(e) => {
              setasignTo(e.target.value);
            }}
            type="text"
            placeholder="Employee Name"
            className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">Category</h3>
          <input
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            type="text"
            placeholder="Design, Dev, etc."
            className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
