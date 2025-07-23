# 🗂️ Task Management Dashboard

A **React-based task management system** that helps administrators assign and track tasks while allowing employees to manage their work effectively. Data is stored using `localStorage` and shared via React Context API.

---

## 🚀 Features

### 👤 User Roles

- **Admin**
  - Assign tasks to employees
  - Track progress (Active, New, Completed, Failed)
  - View all employees and their task summaries

- **Employee**
  - View assigned tasks
  - Update task status: ✅ Completed, 🔄 Active, ❌ Failed
  - View real-time task statistics
  - Data persists using localStorage

---

## 🧱 Folder Structure

```

src/
│
├── components/
│   ├── Auth/                → Login system
│   ├── Dashboard/           → Admin and employee dashboards
│   ├── TaskList/            → Employee task lists and summaries
│   ├── other/               → Header, AllTask, TaskNumber, CreateTask
│
├── context/
│   └── AuthProvider.jsx     → Shared auth state via React Context
│
├── utils/
│   └── LocalStorage.js      → LocalStorage utilities
│
└── App.jsx                  → Main app logic & role-based rendering

````

---

## 🔐 Authentication

- Hardcoded credentials (stored in `localStorage`)
- Role is stored on login:

```js
localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
````

---

## 🧠 Technologies Used

* **React.js** (Frontend)
* **TailwindCSS** (Styling)
* **React Context API** (Global state)
* **localStorage** (Persistent data)

---

## 📊 Admin Dashboard

* View and assign tasks via `CreateTask`
* View summaries in `AllTask`:

  * Active, New, Completed, Failed counts
* Click employee to view their personal dashboard

---

## 📋 Employee Dashboard

* Scrollable task list (`TaskList`)
* Colored task cards by status
* Update status buttons per task
* View summary cards in `TaskNumber`

---

## 📦 Data Structure

### 👨‍💼 Employee Object

```js
{
  id: 1,
  firstName: "Rahul",
  email: "rahul@example.com",
  password: "123",
  tasks: [ ... ],
  taskCount: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 0
  }
}
```

### ✅ Task Object

```js
{
  taskTitle: "Design Landing Page",
  taskDescription: "Create a modern UI landing page",
  taskDate: "2025-07-23",
  category: "Design",
  active: true,
  newTask: false,
  completed: false,
  failed: false
}
```

---

## 🛠 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Jatin3979/Task-Managment.git
   cd task-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. Open browser at: `http://localhost:5173/`

---

## ✅ Possible Improvements

| Feature         | Description                                 |
| --------------- | ------------------------------------------- |
| Routing         | Use React Router for multiple page views    |
| API Integration | Replace localStorage with backend/database  |
| Secure Auth     | Add login auth & JWT tokens                 |
| Drag & Drop     | Drag tasks between statuses                 |
| Filtering       | View tasks by category, date, or completion |

---

## 📌 Author

* **Jatin Kumar**
* 📧 [jatin397911@gmail.com](mailto:jatin397911@gmail.com)
* 💼 [LinkedIn](https://linkedin.com/in/jatin-kumar)
* 💻 [GitHub](https://github.com/jatin3979)



