import React from 'react'

function MilestoneItemName(props) {

  const { name } = props

  return (
    <p className="milestone-name">{name}</p>
  )
}

export default MilestoneItemName