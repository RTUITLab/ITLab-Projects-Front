import React from "react"

import MilestoneItem from "./MilestoneItem"

function MilestoneBoard(props) {
  const { milestones } = props

  return (
    <>
      {milestones && (
        <div className="milestone-container">
          {milestones.map((item, index) => (
            <MilestoneItem {...item} key={index} />
          ))}
        </div>
      )}
    </>
  )
}

export default MilestoneBoard
