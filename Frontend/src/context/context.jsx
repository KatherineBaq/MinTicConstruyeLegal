import react, { useState } from "react";

const context = react.createContext({});

export const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    username: "yosstincode",
    password: "12345",
  });

  return (
    <context.Provider value={{ user, setUser }}>{children}</context.Provider>
  );
};
export default context;
