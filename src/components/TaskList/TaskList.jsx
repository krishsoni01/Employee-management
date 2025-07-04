import { useContext, useState } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks);
  const { userData, setUserData } = useContext(AuthContext);

  const updateContextAndLocalStorage = (updatedTasks, summaryUpdate) => {
    const updatedEmployee = {
      ...data,
      tasks: updatedTasks,
      summary: {
        ...data.summary,
        ...summaryUpdate,
      },
    };

    // Update context
    const updatedUserData = userData.map((user) =>
      user.email === updatedEmployee.email ? updatedEmployee : user
    );
    setUserData(updatedUserData);

    // Update localStorage
    const allEmployees = JSON.parse(localStorage.getItem("Employees") || "[]");
    const updatedEmployees = allEmployees.map((emp) =>
      emp.email === updatedEmployee.email ? updatedEmployee : emp
    );

    localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "Employee", employee: updatedEmployee })
    );

    return updatedEmployee;
  };

  const handleAcceptTask = (acceptedTask) => {
    const updatedTasks = tasks.map((task) =>
      task === acceptedTask ? { ...task, newTask: false, active: true } : task
    );

    const summaryUpdate = {
      newTask: data.summary.newTask - 1,
      active: data.summary.active + 1,
    };

    const updatedEmployee = updateContextAndLocalStorage(updatedTasks, summaryUpdate);
    setTasks(updatedEmployee.tasks);
  };

  const handleStatusChange = (changedTask, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task !== changedTask) return task;

      return {
        ...task,
        active: false,
        completed: newStatus === "completed",
        failed: newStatus === "failed",
      };
    });

    const summaryUpdate = {
      active: data.summary.active - 1,
      completed: data.summary.completed + (newStatus === "completed" ? 1 : 0),
      failed: data.summary.failed + (newStatus === "failed" ? 1 : 0),
    };

    const updatedEmployee = updateContextAndLocalStorage(updatedTasks, summaryUpdate);
    setTasks(updatedEmployee.tasks);
  };

  return (
    <div className="mt-10 mb-10 px-4 w-full flex flex-wrap items-start justify-start gap-5">
      {tasks.map((task, id) => {
        if (task.newTask) {
          return (
            <NewTask
              key={id}
              data={task}
              employee={data}
              onAccept={handleAcceptTask}
            />
          );
        }
        if (task.active) {
          return (
            <AcceptTask
              key={id}
              data={task}
              employee={data}
              onStatusChange={handleStatusChange}
            />
          );
        }
        if (task.completed) {
          return <CompleteTask key={id} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={id} data={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
