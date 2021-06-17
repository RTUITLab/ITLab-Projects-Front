import React, { useContext } from "react"

import { Dropdown } from "react-bootstrap"
import FilterActiveMark from "./FilterActiveMark"
import { FilterContext } from "./FilterContext"

function FilterDropdownItem(props) {
  const { filtersContext } = useContext(FilterContext)
  const [, setFilters] = filtersContext

  const { name, isToggled } = props

  const changeToggleState = () => {
    setFilters((prev) =>
      prev.map((item) =>
        item.name === name ? { name: name, isToggled: !item.isToggled } : item
      )
    )
  }

  return (
    <Dropdown.Item className="filter-dropdown-item" onClick={changeToggleState}>
      {name}
      {isToggled && <FilterActiveMark />}
    </Dropdown.Item>
  )
}

export default FilterDropdownItem
