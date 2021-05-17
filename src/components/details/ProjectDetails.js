import React, { useState, useEffect, useContext } from "react"
import { Spinner } from "react-bootstrap"
import axios from "axios"

import { UserManagerContext } from "../utils/UserManagerContext"
import API from "../../api/API"
import ProjectDetailsInfo from "./ProjectDetailsInfo"
import MilestoneBoard from "../milestones/MilestoneBoard"

function ProjectDetails(props) {
  const [project, setProject] = useState(null)

  const UserManager = useContext(UserManagerContext)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    setIsUser(UserManager.checkITLabClaim("projects.user"))
  }, [UserManager])

  const projectId = props.match.params.id

  useEffect(() => {
    const source = axios.CancelToken.source()

    API.get(`/${projectId}`, { cancelToken: source.token })
      .then((response) => {
        if (response.status === 200) setProject(response.data)
      })
      .catch((error) => {
        if (error.response.status === 401)
          UserManager.accessToken().then((token) =>
            localStorage.setItem("accessToken", token)
          )
        console.log(error)
      })

    return () => {
      source.cancel()
    }
  }, [projectId, UserManager])

  return (
    <>
      {isUser ? (
        <div className="content container content-main-container page__container">
          <div className="project-details-container">
            {project && <ProjectDetailsInfo {...project} />}
            {project && <MilestoneBoard {...project} />}
          </div>
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

export default ProjectDetails
