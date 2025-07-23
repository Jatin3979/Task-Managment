import React, { useState, useEffect } from "react";
import TaskNumber from "../other/TaskNumber";
import TaskList from "./TaskList";


const EmployeeTasks = ({ employee }) => {
  // Initialize tasks from employee data
  const [tasks, setTasks] = useState(employee.tasks || []);
  const [taskCount, setTaskCount] = useState(employee.taskCount || {});

  useEffect(() => {
    // Whenever tasks change, recalculate counts
    const counts = { newTask: 0, active: 0, completed: 0, failed: 0 };
    tasks.forEach((task) => {
      if (task.newTask) counts.newTask++;
      if (task.active) counts.active++;
      if (task.completed) counts.completed++;
      if (task.failed) counts.failed++;
    });
    setTaskCount(counts);
  }, [tasks]);

  const updateTaskStatus = (index, statusKey) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: statusKey === "completed",
          failed: statusKey === "failed",
          active: statusKey === "active",
          newTask: false,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

    // Update localStorage (assuming employee has unique id)
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employeeIndex = employees.findIndex((e) => e.id === employee.id);
    if (employeeIndex !== -1) {
      employees[employeeIndex].tasks = updatedTasks;
      employees[employeeIndex].taskCount = taskCount;
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  };

  return (
    <div>
      <TaskNumber data={{ taskCount }} />
      <TaskList data={{ tasks }} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeTasks;
