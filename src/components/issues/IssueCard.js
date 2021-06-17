import React, { useState } from "react"
import IssueAuthor from "./IssueAuthor"
import IssueTagList from "../tags/IssueTagList"
import IssueName from "./IssueName"
import IssueDescription from "./IssueDescription"
import IssueDate from './IssueDate'
import IssueMoreButton from "./IssueMoreButton"

function IssueCard(props) {
  
  const { url, tags, name, description, author, date } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`tasks-item ${isOpen && `tasks-item_full`}`}>
      <IssueTagList tags={tags} isOpen={isOpen} />
      <IssueName url={url} name={name} isOpen={isOpen} />
      <IssueDescription description={description} isOpen={isOpen} />
      <IssueAuthor author={author} />
      <IssueDate date={date} />
      <IssueMoreButton setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default IssueCard
