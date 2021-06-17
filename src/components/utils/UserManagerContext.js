import React, { createContext } from "react"

export const UserManagerContext = createContext()

export function UserManagerProvider({ UserManager, children }) {
  return (
    <UserManagerContext.Provider value={new UserManager()}>
      {children}
    </UserManagerContext.Provider>
  )
}
