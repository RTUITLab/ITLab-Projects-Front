import React, { useContext } from "react"
import FilterDropdown from "./FilterDropdown"
import FilterTag from "./FilterTag"

import { FilterContext } from "./FilterContext"

function Filter() {
  const { filtersContext } = useContext(FilterContext)
  const [filters, setFilters] = filtersContext

  return (
    <div className="filter-bar">
      <FilterDropdown />
      {filters &&
        filters.map((item, index) =>
          item.isToggled ? (
            <FilterTag name={item.name} key={index} setFilters={setFilters} />
          ) : null
        )}
    </div>
  )
}

export default Filter
