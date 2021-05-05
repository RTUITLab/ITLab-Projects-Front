import React from "react"

function IssueDescription(props) {
  const { description, isOpen } = props

  return (
    <p
      className={`tasks-description ${isOpen ? `tasks-description_full` : ""}`}
    >
      {description === "" ? "Описание не приведено" : description}
    </p>
  )
}

export default IssueDescription
