import React, { useContext, useEffect, useState } from "react"
import Fuse from "fuse.js"

import { Dropdown } from "react-bootstrap"
import FilterDropdownItem from "./FilterDropdownItem"
import { FilterContext } from "./FilterContext"

function FilterDropdownMenu(props) {
  const { filtersContext } = useContext(FilterContext)
  const [filters] = filtersContext

  const [searchFilters, setSearchFilters] = useState(filters)
  useEffect(() => {
    setSearchFilters(filters)
  }, [filters])

  const fuse = filters
    ? new Fuse(filters, {
        keys: ["name"],
        minMatchCharLength: 1,
        threshold: 0.3
      })
    : null

  const filterSearch = (event) => {
    const { value } = event.target

    if (value !== "") {
      setSearchFilters(fuse.search(value).map((el) => el.item))
    } else {
      setSearchFilters(filters)
    }
  }

  return (
    <Dropdown.Menu className="filter-dropdown-menu">
      <div className="filter-dropdown-items-container">
        {searchFilters &&
          searchFilters.map((item, index) => (
            <FilterDropdownItem
              key={index}
              name={item.name}
              isToggled={item.isToggled}
            />
          ))}
      </div>
      <div className="input-group filter-dropdown-menu__search">
        <input
          type="text"
          className="form-control filter-dropdown-menu__search-input"
          placeholder="Поиск"
          aria-label="input"
          aria-describedby="inputGroup-sizing-default"
          onChange={filterSearch}
        />
      </div>
    </Dropdown.Menu>
  )
}

export default FilterDropdownMenu
