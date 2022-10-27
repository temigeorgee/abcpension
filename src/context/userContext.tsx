import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = (props: any) => {
  let storage;
  if (typeof window !== "undefined") {
    storage = JSON.parse(localStorage.getItem("form") ?? "{}");
  }

  const [userData, setUserDate] = useState(storage);
  return (
    <ThemeContext.Provider value={{ userData, setUserDate }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
