import React from "react"

import ProjectTag from './ProjectTag'

function ProjectTagList(props) {
  const { tags } = props

  return (
    <div className="project-tag-container">
      {tags && tags.map((item, index) => (
        <ProjectTag value={item.tag} key={index} />
      ))}
    </div>
  )
}

export default ProjectTagList
