import React, { useEffect, useState } from "react"

import { getHSLfromString } from "./getTagColor"

function IssueTag(props) {
  const { value } = props

  const [color, setColor] = useState(null)
  const [bgrColor, setBgrColor] = useState(null)

  useEffect(() => {
    setColor(
      getHSLfromString(value, 1, {
        hue: [0, 360],
        sat: [70, 100],
        lit: [40, 50]
      })
    )
    setBgrColor(
      getHSLfromString(value, 0.1, {
        hue: [0, 360],
        sat: [70, 100],
        lit: [40, 50]
      })
    )
  }, [value])

  const style = {
    color: color,
    background: bgrColor
  }

  return (
    <p className="tasks-tags-item" style={style}>
      {value}
    </p>
  )
}

export default IssueTag
