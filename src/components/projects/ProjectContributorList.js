import React from "react"

import ProjectContributor from "./ProjectContributor"

function ProjectContributorList(props) {
  const { contributors } = props

  return (
    <div className="project-contributors">
      {contributors.map((contributor, index) => (
        <ProjectContributor
          avatarURL={contributor.avatar_url}
          name={contributor.login}
          url={contributor.html_url}
          key={index}
        />
      ))}
    </div>
  )
}

export default ProjectContributorList
