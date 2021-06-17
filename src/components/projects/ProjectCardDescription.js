import React from "react"

function ProjectCardDescription(props) {
  const { description } = props

  return (
    <p className="project-description">
      {description === "" ? "Описание не приведено" : description}
    </p>
  )
}

export default ProjectCardDescription
