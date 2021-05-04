import React from 'react'

function MilestoneItemDescription(props) {

  const { description } = props

  return (
    <p className="milestone-description">{description === "" ? "Описание не приведено" : description}</p>
  )
}

export default MilestoneItemDescription