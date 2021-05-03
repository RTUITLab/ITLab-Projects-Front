import React, { useState, createContext, useEffect } from "react"
import axios from "axios"
import API from "../../api/API"

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(null)

  useEffect(() => {
    const source = axios.CancelToken.source()

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

    return () => {
      source.cancel()
    }
  }, [])
  
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
