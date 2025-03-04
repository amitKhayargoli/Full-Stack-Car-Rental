import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState("");

  return (
    <UserContext.Provider value={{ profilePicture, setProfilePicture }}>
      {children}
    </UserContext.Provider>
  );
};
