import React from "react"

function FilterTag(props) {
  const { name, setFilters } = props

  const deleteFilter = () => {
    setFilters((prev) =>
      prev.map((item) =>
        item.name === name ? { name: name, isToggled: !item.isToggled } : item
      )
    )
  }

  return (
    <div className="filter-tag">
      <p className="filter-tag-name">{name}</p>
      <button className="filter-tag-delete-btn">
        <i className="bi bi-x-circle-fill" onClick={deleteFilter}></i>
      </button>
    </div>
  )
}

export default FilterTag
