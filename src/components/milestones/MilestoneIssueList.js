import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import MilestoneIssue from "./MilestoneIssue"

function MilestoneIssueList(props) {
  const { issues } = props

  const [todoIssues, setTodoIssues] = useState([])
  const [readyIssues, setReadyIssues] = useState([])

  useEffect(() => {
    if (issues) {
      setTodoIssues(issues.filter((item) => item.state === "open"))
      setReadyIssues(issues.filter((item) => item.state === "closed"))
    }
  }, [issues])

  return (
    <>
      {issues && (todoIssues.length > 0 || readyIssues.length > 0) && (
        <div className="milestone-task-container">
          {todoIssues.length > 0 && (
            <MilestoneIssue variant="todo" issues={todoIssues} />
          )}
          {readyIssues.length > 0 && (
            <MilestoneIssue variant="ready" issues={readyIssues} />
          )}
        </div>
      )}
    </>
  )
}

export default MilestoneIssueList
