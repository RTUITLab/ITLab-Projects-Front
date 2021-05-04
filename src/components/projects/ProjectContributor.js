import React from "react"

import { OverlayTrigger, Tooltip } from "react-bootstrap"

function ProjectContributor(props) {
  const { avatarURL, name, url } = props

  const style = {
    background: `center / cover url('${avatarURL}')`
  }

  return (
    <OverlayTrigger
      key={"top"}
      placement={"top"}
      overlay={
        <Tooltip id={`tooltip-top`}>
          {name}
        </Tooltip>
      }
    >
      <a target="_blank" rel="noreferrer" href={url}>
        <div className="project-contributors-item" style={style}></div>
      </a>
    </OverlayTrigger>
  )
}

export default ProjectContributor
