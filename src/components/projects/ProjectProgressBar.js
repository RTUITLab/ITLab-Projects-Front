import React, { useState, useEffect } from "react"
import { ProgressBar } from "react-bootstrap"

function ProjectProgressBar(props) {

  const { progress } = props

  const [progressColor, setProgressColor] = useState("info")
  useEffect(() => {
    setProgressColor(
      progress * 100 < 34 ? "info" : progress * 100 < 67 ? "warning" : "success"
    )
  }, [progress])

  return (
    <div className="project-progress-container">
      <p className="project-progress-status">
        Завершено:{" "}
        <span className={`project-progress-status-value text-${progressColor}`}>
          {Math.floor(progress * 100)}%
        </span>
      </p>
      <ProgressBar variant={progressColor} now={progress * 100} />
    </div>
  )
}

export default ProjectProgressBar
