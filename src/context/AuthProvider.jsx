import { createContext, useState, useEffect } from "react";
import { getLocalStorage, initLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    initLocalStorage();  // Initialize Employees if not present
    const { Employees } = getLocalStorage();
    if (Employees) {
      setUserData(Employees);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
