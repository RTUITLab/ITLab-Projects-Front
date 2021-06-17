import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

import ProjectContributorList from "./ProjectContributorList"
import ProjectProgressBar from "./ProjectProgressBar"

function ProjectCardStats(props) {
  const { id, contributors, progress } = props

  return (
    <div className="project-info-container">
      {/* button to project-details */}
      <Link to={`/projects/${id}`}>
        <Button variant="primary">Подробнее</Button>
      </Link>

      {/* contributors */}
      <ProjectContributorList contributors={contributors.slice(0, 4)} />

      {/* progress */}
      <ProjectProgressBar progress={progress} />
    </div>
  )
}

export default ProjectCardStats