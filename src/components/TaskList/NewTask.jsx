import { useContext, useState } from "react";
import dayjs from "dayjs";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const NewTask = ({ data, employee, onAccept }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  if (!data || !data.category) return null;

  const handleAccept = () => {
    if (loading) return;
    setLoading(true);
    toast.success("Task Accepted!!");
    setTimeout(() => {
      // 1. Update the task status
      const updatedTasks = employee.tasks.map((task) =>
        task === data ? { ...task, newTask: false, active: true } : task
      );

      // 2. Update employee summary
      const updatedEmployee = {
        ...employee,
        tasks: updatedTasks,
        summary: {
          ...employee.summary,
          newTask: employee.summary.newTask - 1,
          active: employee.summary.active + 1,
        },
      };

      // 3. Update context
      const updatedUserData = userData.map((user) =>
        user.email === updatedEmployee.email ? updatedEmployee : user
      );
      setUserData(updatedUserData);

      // 4. Update localStorage
      const allEmployees = JSON.parse(localStorage.getItem("Employees") || "[]");
      const updatedEmployees = allEmployees.map((emp) =>
        emp.email === updatedEmployee.email ? updatedEmployee : emp
      );
      localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "Employee", employee: updatedEmployee })
      );

      // 5. Trigger UI change
      onAccept(data); // notify parent to convert to AcceptTask

      setLoading(false);
    }, 1000); // simulate loading
  };

  return (
    <div className="w-full sm:w-[48%] lg:w-[24%] min-h-[200px] p-4 bg-blue-600 rounded-2xl flex flex-col justify-between flex-shrink-0">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-sm text-xs sm:text-sm font-medium">
            {data.category}
          </span>
          <span className="text-xs sm:text-sm">
            {dayjs(data.date).format("DD MMM YYYY")}
          </span>
        </div>

        <div className="mt-6">
          <h1 className="text-base sm:text-lg font-bold mb-2">{data.title}</h1>
          <p className="text-sm sm:text-base">{data.description}</p>
        </div>
      </div>

      <div className="mt-5">
        <button
          onClick={handleAccept}
          disabled={loading}
          className={`w-full px-4 py-2 rounded text-sm sm:text-base flex items-center justify-center gap-2 ${
            loading
              ? "bg-gray-300 text-blue-600 cursor-wait"
              : "bg-white text-blue-600"
          }`}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
              Accepting...
            </>
          ) : (
            "Accept"
          )}
        </button>
      </div>
    </div>
  );
};

export default NewTask;
