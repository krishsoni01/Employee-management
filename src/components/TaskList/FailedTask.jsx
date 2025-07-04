import dayjs from "dayjs";

const FailedTask = ({ data }) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[24%] min-h-[200px] p-4 bg-red-600 cursor-pointer rounded-2xl flex flex-col justify-between flex-shrink-0">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="bg-white text-red-600 px-3 py-1 rounded-sm text-xs sm:text-sm font-medium">
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
        <button className="bg-white text-red-600 w-full px-4 py-2 rounded text-sm sm:text-base">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
