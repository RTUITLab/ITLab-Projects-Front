import React from "react"
import ProjectContributorList from "../projects/ProjectContributorList"

function ProjectDetailsContributors(props) {

  const { contributors } = props

  return (
    <div className="project-info-item">
      <p className="project-info-item-name">Участники:</p>
      <ProjectContributorList contributors={contributors} />
    </div>
  )
}

export default ProjectDetailsContributors
