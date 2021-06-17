import React from 'react'

function ProjectCardLastUpdate(props) {

  const { date } = props

  return (
    <p className="project-last-update">
      Последнее обновление {new Date(date).toLocaleDateString()}
    </p>
  )
}

export default ProjectCardLastUpdate