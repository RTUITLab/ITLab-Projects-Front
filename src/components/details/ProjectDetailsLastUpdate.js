import React from "react"

function ProjectDetailsLastUpdate(props) {

  const { lastUpdate } = props

  return (
    <div className="project-info-item">
      <p className="project-info-item-name">Последнее обновление: {new Date(lastUpdate).toLocaleDateString()}</p>
    </div>
  )
}

export default ProjectDetailsLastUpdate
