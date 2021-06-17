import React from "react"
import { Dropdown } from "react-bootstrap"
import FilterDropdownMenu from "./FilterDropdownMenu"

function FilterDropdown(props) {
  return (
    <div className="filter-bar__btn-group">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Фильтр по выбранным тегам
        </Dropdown.Toggle>
        <FilterDropdownMenu />
      </Dropdown>
    </div>
  )
}

export default FilterDropdown
