import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import SectionItem from "./SectionItem"

function SectionBar(props) {
  const [sections, setSections] = useState([
    { name: "Проекты", url: "/projects", isToggled: false },
    { name: "Задачи", url: "/projects/issues", isToggled: false }
  ])

  const location = useLocation()

  useEffect(() => {
    setSections((prev) =>
      prev.map((item) =>
        item.url === location.pathname
          ? { name: item.name, url: item.url, isToggled: true }
          : item
      )
    )
  }, [location])

  return (
    <div className="change-section-container content__change-section-container">
      {sections.map((item, index) => (
        <SectionItem
          name={item.name}
          url={item.url}
          isToggled={item.isToggled}
          key={index}
        />
      ))}
    </div>
  )
}

export default SectionBar
