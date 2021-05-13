import React from "react"

import ProjectTagList from "../tags/ProjectTagList"
import ProjectCardLastUpdate from "./ProjectCardLastUpdate"
import ProjectCardTitle from "./ProjectCardTitle"
import ProjectCardDescription from "./ProjectCardDescription"
import ProjectCardStats from "./ProjectCardStats"

function ProjectCard(props) {
  const {
    id,
    name,
    contributors,
    description,
    updated_at: lastUpdate
  } = props.repo

  const { tags, completed: progress } = props

  return (
    <div className="project-card">
      {/* tags */}
      {tags && <ProjectTagList tags={tags} />}

      {/* title */}
      {name && <ProjectCardTitle name={name} />}

      {/* description */}
      <ProjectCardDescription description={description} />

      {/* link-button, contributors, progress */}
      {id && contributors && <ProjectCardStats
        id={id}
        contributors={contributors}
        progress={progress}
      />}

      {/* last-update date */}
      {lastUpdate && <ProjectCardLastUpdate date={lastUpdate} />}
    </div>
  )
}

export default ProjectCard
