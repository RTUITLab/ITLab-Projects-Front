import React, { useState, useEffect } from "react"
import { ProgressBar } from "react-bootstrap"

function ProjectDetailsProgress(props) {
  const { progress } = props

  const [progressColor, setProgressColor] = useState("info")
  useEffect(() => {
    setProgressColor(
      progress * 100 < 34 ? "info" : progress * 100 < 67 ? "warning" : "success"
    )
  }, [progress])

  return (
    <div className="project-info-item">
      <p className="project-info-item-name">
        Завершено:{" "}
        <span className={`project-progress-status-value text-${progressColor}`}>{Math.floor(progress * 100)}%</span>
      </p>
      <div className="project-progress-container project-details__project-progress-container">
        <ProgressBar variant={progressColor} now={progress * 100} />
      </div>
    </div>
  )
}

export default ProjectDetailsProgress
