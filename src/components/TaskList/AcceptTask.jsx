import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const AcceptTask = ({ data, employee, onStatusChange }) => {
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(null);

  const handleStatusChange = (newStatus) => {
    setLoading(newStatus);

    if(newStatus == "completed"){
      toast.success("Task marked as Completed!");
    }
    if(newStatus == "failed"){
      toast.error("Task marked as Failed!");
    }

    setTimeout(() => {
      setStatus(newStatus);
      setLoading(null);

      // Call parent function to update global data
      onStatusChange(data, newStatus);
    }, 1000);
  };

  const statusColors = {
    active: "bg-yellow-600",
    completed: "bg-green-500",
    failed: "bg-red-600",
  };

  const finalText = {
    completed: "Completed",
    failed: "Failed",
  };

  return (
    <div
      className={`w-full sm:w-[48%] lg:w-[24%] min-h-[200px] p-4 rounded-2xl flex flex-col justify-between flex-shrink-0 cursor-pointer text-white ${statusColors[status]}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white text-black px-3 py-1 rounded-sm text-xs sm:text-sm font-medium">
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

      <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-2">
        {status === "active" ? (
          <>
            <button
              onClick={() => handleStatusChange("completed")}
              disabled={loading === "completed"}
              className="bg-green-500 px-3 py-2 rounded text-sm sm:text-base disabled:opacity-60"
            >
              {loading === "completed" ? "Completing..." : "Mark as Completed"}
            </button>
            <button
              onClick={() => handleStatusChange("failed")}
              disabled={loading === "failed"}
              className="bg-red-500 px-3 py-2 rounded text-sm sm:text-base disabled:opacity-60"
            >
              {loading === "failed" ? "Failing..." : "Mark as Failed"}
            </button>
          </>
        ) : (
          <button
            className={`w-full py-2 rounded text-sm sm:text-base ${
              status === "completed"
                ? "bg-white text-green-600"
                : "bg-white text-red-600"
            }`}
            disabled
          >
            {finalText[status]}
          </button>
        )}
      </div>
    </div>
  );
};

export default AcceptTask;
