import React from "react"

function ProjectCardTitle(props) {
  const { name } = props

  return (
    <>
      <h5 className="project-title">{name}</h5>
      <hr className="project-hr" />
    </>
  )
}

export default ProjectCardTitle
