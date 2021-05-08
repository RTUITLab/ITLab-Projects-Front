import React, { useState } from "react"

import MilestoneButton from "./MilestoneButton"

function MilestoneButtonList(props) {
  const { estimate, task, id } = props

  const [milestoneEstimate, setMilestoneEstimate] = useState(estimate)
  const [milestoneTask, setMilestoneTask] = useState(task)

  // TODO: get user admin-info
  const [isAdmin] = useState(true)

  return (
    <div className="milestone-actions-container">
      {milestoneEstimate && (
        <MilestoneButton
          name="Смета"
          variant={"info"}
          data={milestoneEstimate}
          id={id}
        />
      )}
      {milestoneTask && (
        <MilestoneButton
          name="Функциональное задание"
          variant={"success"}
          data={milestoneTask}
          id={id}
        />
      )}
      {isAdmin && !milestoneEstimate && (
        <MilestoneButton
          name="Добавить смету"
          variant={"info"}
          data={milestoneEstimate}
          setData={setMilestoneEstimate}
          id={id}
        />
      )}
      {isAdmin && !milestoneTask && (
        <MilestoneButton
          name="Добавить ФЗ"
          variant={"success"}
          data={milestoneTask}
          setData={setMilestoneTask}
          id={id}
        />
      )}
      {isAdmin && milestoneEstimate && (
        <MilestoneButton
          name="Удалить смету"
          variant={"danger"}
          data={milestoneEstimate}
          setData={setMilestoneEstimate}
          id={id}
        />
      )}
      {isAdmin && milestoneTask && (
        <MilestoneButton
          name="Удалить ФЗ"
          variant={"warning"}
          data={milestoneTask}
          setData={setMilestoneTask}
          id={id}
        />
      )}
    </div>
  )
}

export default MilestoneButtonList
