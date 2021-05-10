import React, { useEffect, useState } from "react"

import MilestoneButton from "./MilestoneButton"

function MilestoneButtonList(props) {
  const { estimate, task, id } = props

  const [milestoneEstimate, setMilestoneEstimate] = useState(estimate)
  const [milestoneTask, setMilestoneTask] = useState(task)

  const [isAdmin, setIsAdmin] = useState(false)

  const checkIsAdmin = (claim) => {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
      return null;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload || !payload.itlab) {
      return false;
    }

    return JSON.stringify(payload.itlab).includes(claim);
  }

  useEffect(() => {
    // claim name
    if (checkIsAdmin("projects.admin")) setIsAdmin(true)
  }, [])

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
