const defaultEmployees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    summary: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Design login page",
        description: "Create a responsive login UI using Tailwind CSS.",
        date: "2025-06-25",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar bug",
        description: "Resolve the overlapping issue in the navigation menu.",
        date: "2025-06-20",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update user docs",
        description: "Add recent API changes to the documentation.",
        date: "2025-06-18",
        category: "documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Diya",
    email: "employee2@example.com",
    password: "123",
    summary: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 2
    },
    tasks: [
      {
        title: "Setup backend API",
        description: "Initialize Node.js project and build user routes.",
        date: "2025-06-15",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create database schema",
        description: "Design MongoDB schema for task management.",
        date: "2025-06-17",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy to Render",
        description: "Host backend on Render and share URL.",
        date: "2025-06-19",
        category: "deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write tests",
        description: "Create unit tests for login functionality.",
        date: "2025-06-21",
        category: "testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    summary: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "UI improvement",
        description: "Enhance dashboard UI for better UX.",
        date: "2025-06-20",
        category: "design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Performance analysis",
        description: "Analyze app performance using Lighthouse.",
        date: "2025-06-22",
        category: "analytics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix broken links",
        description: "Check and fix all broken internal links.",
        date: "2025-06-18",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "CSS refactoring",
        description: "Remove unused CSS and optimize Tailwind config.",
        date: "2025-06-21",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    summary: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Integrate chart library",
        description: "Use Recharts to display user stats.",
        date: "2025-06-19",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create task form",
        description: "Build a form to add new tasks.",
        date: "2025-06-24",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug fix in calendar",
        description: "Resolve issue in date picker component.",
        date: "2025-06-23",
        category: "development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Karthik",
    email: "employee5@example.com",
    password: "123",
    summary: {
      active: 2,
      completed: 2,
      failed: 1,
      newTask: 2
    },
    tasks: [
      {
        title: "Conduct meeting",
        description: "Host sprint planning meeting.",
        date: "2025-06-20",
        category: "management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update task status",
        description: "Review tasks and update progress in system.",
        date: "2025-06-22",
        category: "reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team feedback",
        description: "Gather feedback from team for last sprint.",
        date: "2025-06-23",
        category: "management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Code cleanup",
        description: "Remove dead code and improve readability.",
        date: "2025-06-24",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backup DB",
        description: "Schedule and perform database backup.",
        date: "2025-06-25",
        category: "database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const defaultAdmin = [
  {
    id: 1,
    email: "admin@example.com",
    firstName: "Admin",
    password: "123"
  }
];

export const initLocalStorage = () => {
  if (!localStorage.getItem("Employees")) {
    localStorage.setItem("Employees", JSON.stringify(defaultEmployees));
  }
  if (!localStorage.getItem("Admin")) {
    localStorage.setItem("Admin", JSON.stringify(defaultAdmin));
  }
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = () => {
  const Employees = JSON.parse(localStorage.getItem("Employees")) || [];
  const Admin = JSON.parse(localStorage.getItem("Admin")) || [];
  return { Employees, Admin };
};
