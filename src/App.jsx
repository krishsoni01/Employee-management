import { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import { toast } from "react-toastify";

const App = () => {
  // localStorage.clear();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { setUserData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      const role = userData.role?.toLowerCase();
      setUser(role);

      if (role === "employee" && userData.employee) {
        setLoggedInUserData(userData.employee);
      }
    }

  }, []);

  const HandleLogin = (email, password) => {
    const { Employees } = getLocalStorage();

    if (email === "admin@example.com" && password === "123") {
      toast.success("Login Successfully!");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
      return;
    }

    const employee = Employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      toast.success("Login Successfully!");
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "Employee", employee })
      );
    } else {
      toast.error("Invalid Credentials!");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] overflow-x-hidden box-border">
      {!user && <Login HandleLogin={HandleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </div>
  );
};

export default App;
