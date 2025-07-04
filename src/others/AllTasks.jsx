import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTasks = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="w-full px-4 py-6 box-border bg-[#1e1e1e] overflow-x-hidden">
      <div className="grid grid-cols-5 gap-2 text-center rounded bg-gray-600 mb-4 p-3">
        <h1 className="text-sm md:text-base font-medium break-words">Employee Name</h1>
        <h1 className="text-sm md:text-base font-medium break-words">Active</h1>
        <h1 className="text-sm md:text-base font-medium break-words">New</h1>
        <h1 className="text-sm md:text-base font-medium break-words">Completed</h1>
        <h1 className="text-sm md:text-base font-medium break-words">Failed</h1>
      </div>

      <div className="space-y-3">
        {userData.map((elem, key) => (
          <div
            key={key}
            className="grid grid-cols-5 gap-2 text-center p-3 rounded border border-green-300"
          >
            <h1 className="text-sm md:text-base font-medium break-words">{elem.firstName}</h1>
            <h1 className="text-sm md:text-base text-yellow-400 font-medium">{elem.summary.active}</h1>
            <h1 className="text-sm md:text-base text-blue-500 font-medium">{elem.summary.newTask}</h1>
            <h1 className="text-sm md:text-base text-green-500 font-medium">{elem.summary.completed}</h1>
            <h1 className="text-sm md:text-base text-red-500 font-medium">{elem.summary.failed}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
