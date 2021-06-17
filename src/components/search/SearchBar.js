import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

function SearchBar() {
  
  const history = useHistory()
  const [searchQuery, setSearchQuery] = useState(null)

  const handleOnChange = (e) => {
    const { value } = e.target
    setSearchQuery(value)
  }

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        searchQuery !== null
          ? history.push(`?search=${searchQuery}`)
          : history.push(`?`),
      300
    )
    return () => clearTimeout(timeoutId)
  }, [searchQuery, history])


  return (
    <div className="search-bar content__search-bar">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Поиск"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleOnChange}
        />
      </div>
      <span className="search-input-icon">
        <i className="bi bi-search"></i>
      </span>
    </div>
  )
}

export default SearchBar
