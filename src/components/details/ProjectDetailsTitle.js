import React from "react"

function ProjectDetailsTitle(props) {
  const { name, url } = props

  return (
    <a
      className="project-details__project-title-url"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <h5 className="project-title project-details__project-title">{name} <i className="bi bi-github"></i></h5>
    </a>
  )
}

export default ProjectDetailsTitle
