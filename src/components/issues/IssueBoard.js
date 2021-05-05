import React from "react"

import { FilterProvider } from '../filter/FilterContext'
import SearchBar from '../search/SearchBar'
import FilterBar from '../filter/FilterBar'
import SectionBar from '../section/SectionBar'
import IssueBar from "./IssueBar"

function IssueBoard(props) {
  return (
    <div className="content container content-main-container page__container">
      <FilterProvider>
        <SearchBar />
        <FilterBar />
        <SectionBar />
        <IssueBar />
      </FilterProvider>
    </div>
  )
}

export default IssueBoard
