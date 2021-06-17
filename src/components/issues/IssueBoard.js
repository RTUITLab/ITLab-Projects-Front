import React, { useState, useEffect, useContext } from "react"
import { Spinner } from "react-bootstrap"

import { UserManagerContext } from "../utils/UserManagerContext"
import { FilterProvider } from "../filter/FilterContext"
import SearchBar from "../search/SearchBar"
import FilterBar from "../filter/FilterBar"
import SectionBar from "../section/SectionBar"
import IssueBar from "./IssueBar"

function IssueBoard(props) {
  const UserManager = useContext(UserManagerContext)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    setIsUser(UserManager.checkITLabClaim("projects.user"))
  }, [UserManager])

  return (
    <>
      {isUser ? (
        <div className="content container content-main-container page__container">
          <FilterProvider>
            <SearchBar />
            <FilterBar />
            <SectionBar />
            <IssueBar />
          </FilterProvider>
        </div>
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

export default IssueBoard
