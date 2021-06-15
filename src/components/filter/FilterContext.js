import React, { useState, createContext, useContext, useEffect } from "react"
import axios from "axios"
import API from "../../api/API"
import { useLocation } from "react-router"
import { UserManagerContext } from "../utils/UserManagerContext"

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(null)
  const location = useLocation()

  const UserManager = useContext(UserManagerContext)

  useEffect(() => {
    const source = axios.CancelToken.source()

    if (location.pathname === "/projects/issues") {
      API.get(`/v1/issues/labels`, {
        cancelToken: source.token
      })
        .then((response) => {
          if (response.status === 200) {
            const tagsSet = response.data.map((item) => {
              return { name: item, isToggled: false }
            })
            setFilters(tagsSet)
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401)
            UserManager.accessToken().then((token) =>
              localStorage.setItem("accessToken", token)
            )
          console.log(error)
        })
    } else {
      API.get(`/v1/tags`, {
        cancelToken: source.token
      })
        .then((response) => {
          if (response.status === 200) {
            const tagsSet = [
              ...new Set(response.data.map((item) => item.tag))
            ].map((item) => {
              return { name: item, isToggled: false }
            })
            setFilters(tagsSet)
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401)
            UserManager.accessToken().then((token) =>
              localStorage.setItem("accessToken", token)
            )
          console.log(error)
        })
    }

    return () => {
      source.cancel()
    }
  }, [location, UserManager])

  return (
    <FilterContext.Provider
      value={{
        filtersContext: [filters, setFilters]
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
