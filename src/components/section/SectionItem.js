import React from "react"
import { Link } from "react-router-dom"

function SectionItem(props) {
  const { name, url, isToggled } = props

  return (
    <Link
      to={url}
      className={`section-link ${isToggled && `section-link_active`}`}
    >
      {name}
    </Link>
  )
}

export default SectionItem
