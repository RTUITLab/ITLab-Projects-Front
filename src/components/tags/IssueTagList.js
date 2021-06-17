import React from "react"

import IssueTag from "./IssueTag"

function IssueTagList(props) {
  const { tags, isOpen } = props

  return (
    <div className={`tasks-tags ${isOpen && `tasks-tags_full`}`}>
      {tags.length === 0 && <IssueTag value="Без тега" />}
      {tags && tags.map((item, index) => (
        <IssueTag value={item.name} key={index} />
      ))}
    </div>
  )
}

export default IssueTagList
