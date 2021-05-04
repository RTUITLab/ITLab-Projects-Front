import React from 'react'
import MilestoneButtonList from './MilestoneButtonList'
import MilestoneIssueList from './MilestoneIssueList'
import MilestoneItemDescription from './MilestoneItemDescription'
import MilestoneItemName from './MilestoneItemName'

function MilestoneItem(props) {

  const { title: name, description, estimate: estimateURL, func_task: taskURL, issues } = props

  return (
    <div className="milestone-item">
      <MilestoneItemName name={name} />
      <MilestoneItemDescription description={description} />
      <MilestoneButtonList estimateURL={estimateURL} taskURL={taskURL} />
      <MilestoneIssueList issues={issues} />
    </div>
  )
}

export default MilestoneItem