import React, { useContext, useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"

import { FilterProvider } from "../filter/FilterContext"
import SearchBar from "../search/SearchBar"
import FilterBar from "../filter/FilterBar"
import SectionBar from "../section/SectionBar"
import ProjectBar from "./ProjectBar"
import { UserManagerContext } from "../utils/UserManagerContext"

function ProjectBoard(props) {
  const UserManager = useContext(UserManagerContext)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    setIsUser(UserManager.checkITLabClaim("projects.user"))
  }, [UserManager])

  return (
    <>
      {isUser ? (
        <FilterProvider>
          <div className="content container content-main-container page__container">
            <SearchBar />
            <FilterBar />
            <SectionBar />
            <ProjectBar />
          </div>
        </FilterProvider>
      ) : (
        <div className="content container content-main-container page__container">
          <div className="loading-item">
            <Spinner
              animation="border"
              variant="primary"
              role="status"
              style={{ width: "70px", height: "70px" }}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectBoard
