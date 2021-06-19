import React, { createContext } from "react";

export const UserManagerContext = createContext();

export function UserManagerProvider({ UserManager, children }) {
  return (
    <UserManagerContext.Provider value={UserManager}>
      {children}
    </UserManagerContext.Provider>
  );
}
