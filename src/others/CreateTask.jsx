import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { setLocalStorage } from "../utils/LocalStorage";
import { toast } from "react-toastify";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const {userData, setUserData} = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if(!title || !date || !employee || !category || !description){
      toast.error("Please fill in all fields!");
      return;
    }

    let userSearching = userData.find((user)=>{user.firstName === employee});
    if(!userSearching){
      toast.error("Employee Not Found!");
      return;
    }

    let newTask ={};
    if(title && date && employee && category && description){
    newTask = {title, date, employee, category, description ,active:false, newTask:true, failed:false, completed:false };
    }

    const updatedData = userData.map((user)=>{
      if(user.firstName === employee){
        toast.success("Task Created!");
        return {
          ...user,
          tasks: [...user.tasks,newTask],
          summary : {
            ...user.summary,
            newTask : user.summary.newTask +1
          }
        }
      }
      return user;
    });

    setUserData(updatedData);
    setLocalStorage("Employees",updatedData);

    setTitle("");
    setDate("");
    setEmployee("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#1e1e1e] w-full p-5 mt-5 mx-auto rounded-md shadow-md text-white flex justify-between gap-6"
    >
      <div className="flex flex-col w-1/2 gap-4">
        <div>
          <label className="block text-medium mb-1">Task Title</label>
          <input
            type="text"
            placeholder="Make a UI design"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md placeholder-gray-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md text-white outline-none"
          />
        </div>

        <div>
          <label className="block text-medium mb-1">Assign to</label>
          <input
            type="text"
            placeholder="employee name"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md placeholder-gray-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-medium mb-1">Category</label>
          <input
            type="text"
            placeholder="design, dev, etc"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col w-[35%] gap-4 justify-between">
        <div>
          <label className="block text-medium mb-1">Description</label>
          <textarea
            rows="8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-md text-white resize-none outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-400 cursor-pointer font-semibold py-2 rounded-md hover:bg-green-500 transition"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
