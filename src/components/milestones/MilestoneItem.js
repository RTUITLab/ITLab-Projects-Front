import React from 'react'
import MilestoneButtonList from './MilestoneButtonList'
import MilestoneIssueList from './MilestoneIssueList'
import MilestoneItemDescription from './MilestoneItemDescription'
import MilestoneItemName from './MilestoneItemName'

function MilestoneItem(props) {

  const { title: name, description, estimate, func_task: task, issues, id } = props

  return (
    <div className="milestone-item">
      <MilestoneItemName name={name} />
      <MilestoneItemDescription description={description} />
      <MilestoneButtonList estimate={estimate} task={task} id={id} />
      <MilestoneIssueList issues={issues} />
    </div>
  )
}

export default MilestoneItem