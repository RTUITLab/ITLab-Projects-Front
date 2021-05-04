import React from "react"
import MilestoneIssueInfoTodo from "./MilestoneIssueInfoTodo"
import MilestoneIssueInfoReady from "./MilestoneIssueInfoReady"
import IssueCard from "../issues/IssueCard"

function MilestoneIssue(props) {
  const { variant, issues } = props

  return (
    <div className="milestone-task-item">
      {issues && variant === "todo" ? (
        <MilestoneIssueInfoTodo />
      ) : issues && variant === "ready" ? (
        <MilestoneIssueInfoReady />
      ) : null}
      {issues.map((item, index) => (
        <IssueCard
          url={item.html_url}
          tags={item.labels}
          name={item.title}
          description={item.body}
          author={item.user}
          date={item.created_at}
          key={index}
        />
      ))}
    </div>
  )
}

export default MilestoneIssue
