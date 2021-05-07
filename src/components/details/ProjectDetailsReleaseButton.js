import React from 'react'

function ProjectDetailsReleaseButton(props) {

  const { url } = props

  return (
    <a href={url} target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary project-details-release-btn">Релиз</button></a>
  )
}

export default ProjectDetailsReleaseButton