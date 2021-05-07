import React from "react"

import ProjectDetailsContributors from "./ProjectDetailsContributors"
import ProjectDetailsLastUpdate from "./ProjectDetailsLastUpdate"
import ProjectDetailsProgress from "./ProjectDetailsProgress"

function ProjectDetailsStats(props) {

  const { progress, contributors, lastUpdate } = props

  return (
    <div className="project-info-container project-details__project-info-container">
      <ProjectDetailsProgress progress={progress} />
      <ProjectDetailsContributors contributors={contributors} />
      <ProjectDetailsLastUpdate lastUpdate={lastUpdate} />
    </div>
  )
}

export default ProjectDetailsStats
