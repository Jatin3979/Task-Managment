import React from "react";
const employee = [
  {
    id: 2,
    firstName: "Jatin",
    email: "jatin@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern landing page for the new product.",
        taskDate: "2025-07-23",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve navigation issues on mobile devices.",
        taskDate: "2025-07-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Icons",
        taskDescription: "Replace all old icons with new vector versions.",
        taskDate: "2025-07-22",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Neha",
    email: "neha@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Summarize analytics for the month and share PDF with team.",
        taskDate: "2025-07-21",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Social Media Calendar",
        taskDescription: "Draft content schedule for Instagram and Twitter.",
        taskDate: "2025-07-25",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Survey Email",
        taskDescription: "Create and send survey email to active users.",
        taskDate: "2025-07-27",
        category: "Email",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Backend Refactor",
        taskDescription: "Optimize API response time and structure.",
        taskDate: "2025-07-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "DB Migration",
        taskDescription: "Migrate PostgreSQL DB to a newer version.",
        taskDate: "2025-07-29",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "API Testing",
        taskDescription: "Test new endpoints with Postman.",
        taskDate: "2025-07-23",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "anjali@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Logo Redesign",
        taskDescription: "Create new logo concept for mobile app.",
        taskDate: "2025-07-24",
        category: "Branding",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "User Persona Creation",
        taskDescription: "Create user personas for product roadmap planning.",
        taskDate: "2025-07-28",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 6,
    firstName: "Manish",
    email: "manish@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for user authentication module.",
        taskDate: "2025-07-25",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Cleanup",
        taskDescription: "Remove unused variables and comments from codebase.",
        taskDate: "2025-07-22",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Refactor Components",
        taskDescription: "Refactor reusable components to match design system.",
        taskDate: "2025-07-26",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];

const admin = [
  {
    id: 1,
    firstName:"Jatin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees=  JSON.parse(localStorage.getItem('employees'))
  const admins=  JSON.parse(localStorage.getItem('admin'))
  return{admins,employees}

}
const LocalStorage = () => {
  return <div></div>;
};

export default LocalStorage;
