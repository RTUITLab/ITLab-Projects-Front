import React from "react"

function ProjectDetailsDescription(props) {
  
  const { description } = props

  return (
    <>
      <p className="project-description project-details__project-description">
        {description}
      </p>
      <hr className="project-details-hr" />
    </>
  )
}

export default ProjectDetailsDescription
