import React, { useState, useEffect } from "react"
import axios from "axios"

import API from "../../api/API"
import ProjectDetailsInfo from "./ProjectDetailsInfo"
import MilestoneBoard from "../milestones/MilestoneBoard"

function ProjectDetails(props) {
  const [project, setProject] = useState(null)

  const projectId = props.match.params.id

  useEffect(() => {
    const source = axios.CancelToken.source()
    
    API.get(`/projects/${projectId}`, { cancelToken: source.token }).then(
      (response) => {
        setProject(response.data)
      }
    )

    return () => {
      source.cancel()
    }
  }, [projectId])

  return (
    <div className="content container content-main-container page__container">
      <div className="project-details-container">
        {project && <ProjectDetailsInfo {...project} />}
        {project && <MilestoneBoard {...project} />}
      </div>
    </div>
  )
}

export default ProjectDetails
