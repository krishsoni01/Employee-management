const TaskListNumbers = ({ data }) => {
  return (
    <div className="mt-7 px-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="h-25 bg-blue-500 rounded-2xl flex items-center justify-center flex-col hover:bg-blue-600 cursor-pointer">
          <span className="text-xl sm:text-2xl font-bold">{data.summary.newTask}</span>
          <h1 className="text-lg sm:text-xl font-semibold">New Task</h1>
        </div>

        <div className="h-25 bg-green-600 rounded-2xl flex items-center justify-center flex-col hover:bg-green-500 cursor-pointer">
          <span className="text-xl sm:text-2xl font-bold">{data.summary.completed}</span>
          <h1 className="text-lg sm:text-xl font-semibold">Completed</h1>
        </div>

        <div className="h-25 bg-yellow-500 rounded-2xl flex items-center justify-center flex-col hover:bg-yellow-600 cursor-pointer">
          <span className="text-xl sm:text-2xl font-bold">{data.summary.active}</span>
          <h1 className="text-lg sm:text-xl font-semibold">Accepted</h1>
        </div>

        <div className="h-25 bg-red-600 rounded-2xl flex items-center justify-center flex-col hover:bg-red-700 cursor-pointer">
          <span className="text-xl sm:text-2xl font-bold">{data.summary.failed}</span>
          <h1 className="text-lg sm:text-xl font-semibold">Failed</h1>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
