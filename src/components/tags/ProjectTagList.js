import React from "react"

import ProjectTag from './ProjectTag'

function ProjectTagList(props) {
  const { tags } = props

  return (
    <div className="project-tag-container">
      {tags.map((tag, index) => (
        <ProjectTag value={tag} key={index} />
      ))}
    </div>
  )
}

export default ProjectTagList
