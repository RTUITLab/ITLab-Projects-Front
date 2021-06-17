import React from "react"

function IssueDate(props) {
  const { date } = props

  return <p className="tasks-date">{new Date(date).toLocaleDateString()}</p>
}

export default IssueDate
