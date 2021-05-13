import React from "react"
import ProjectTagList from "../tags/ProjectTagList"
import ProjectDetailsTitle from "./ProjectDetailsTitle"
import ProjectDetailsDescription from "./ProjectDetailsDescription"
import ProjectDetailsStats from "./ProjectDetailsStats"
import ProjectDetailsReleaseButton from './ProjectDetailsReleaseButton'

function ProjectDetailsInfo(props) {
  const { tags, last_realese: releaseURL, completed: progress } = props
  const { name, contributors, description, updated_at: lastUpdate, html_url: url } = props.repo

  return (
    <div className="project-details-info">
      {tags && <ProjectTagList tags={tags} />}
      {name && <ProjectDetailsTitle url={url} name={name} />}
      {description && <ProjectDetailsDescription description={description} />}
      {contributors && lastUpdate && (
        <ProjectDetailsStats
          progress={progress}
          contributors={contributors}
          lastUpdate={lastUpdate}
        />
      )}
      {releaseURL && <ProjectDetailsReleaseButton url={releaseURL} />}
    </div>
  )
}

export default ProjectDetailsInfo
