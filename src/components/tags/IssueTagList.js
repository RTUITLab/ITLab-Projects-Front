import React from "react"

import IssueTag from './IssueTag'

function IssueTagList(props) {
  const { tags, isOpen } = props

  return (
    <div className={`tasks-tags ${isOpen && `tasks-tags_full`}`}>
      {tags.map((tag, index) => (
        <IssueTag value={tag} key={index} />
      ))}
    </div>
  )
}

export default IssueTagList
