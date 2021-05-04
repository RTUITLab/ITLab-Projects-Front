import React from "react"

import { FilterProvider } from "../filter/FilterContext"
import SearchBar from "../search/SearchBar"
import FilterBar from "../filter/FilterBar"
import SectionBar from "../section/SectionBar"
import ProjectBar from "./ProjectBar"

function ProjectBoard(props) {
  return (
    <FilterProvider>
      <div className="content container content-main-container page__container">
        <SearchBar />
        <FilterBar />
        <SectionBar />
        <ProjectBar />
      </div>
    </FilterProvider>
  )
}

export default ProjectBoard
