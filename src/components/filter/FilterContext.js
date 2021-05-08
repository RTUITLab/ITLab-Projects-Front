import React, { useState, createContext, useEffect } from "react"
import axios from "axios"
import API from "../../api/API"
import { useLocation } from "react-router"

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const source = axios.CancelToken.source()

    if (location.pathname === "/projects/issues") {
      API.get(`/projects/issues/labels`, {
        cancelToken: source.token
      }).then((response) => {
        const tagsSet = response.data.map((item) => {
          return { name: item, isToggled: false }
        })
        setFilters(tagsSet)
      })
    } else {
      API.get(`/projects/tags`, {
        cancelToken: source.token
      }).then((response) => {
        const tagsSet = [...new Set(response.data.map((item) => item.tag))].map(
          (item) => {
            return { name: item, isToggled: false }
          }
        )
        setFilters(tagsSet)
      })
    }

    return () => {
      source.cancel()
    }
  }, [location])

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
