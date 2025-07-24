import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Surbhi", email: "surbhi@gmail.com" },
});

export default UserContext;
