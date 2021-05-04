import React from "react"

import MilestoneButton from "./MilestoneButton"

function MilestoneButtonList(props) {
  const { estimateURL, taskURL } = props

  return (
    <div className="milestone-actions-container">
      {estimateURL && (
        <MilestoneButton name="Смета" variant={"info"} url={estimateURL} />
      )}
      {taskURL && (
        <MilestoneButton
          name="Функциональное задание"
          variant={"success"}
          url={taskURL}
        />
      )}
    </div>
  )
}

export default MilestoneButtonList
