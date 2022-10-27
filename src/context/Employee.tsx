import { createContext, useState } from "react";

export const EmployeeContext = createContext({});

export const EmployeeProvider = (props: any) => {
  let storage;
  if (typeof window !== "undefined") {
    storage = JSON.parse(localStorage.getItem("employee") ?? "{}");
  }

  const [employeeData, setEmployeeData] = useState(storage);
  return (
    <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
