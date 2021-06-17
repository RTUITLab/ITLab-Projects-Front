import React from "react"

function IssueMoreButton(props) {

  const { isOpen, setIsOpen } = props

  const clickHandler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <button className="tasks-state-btn" onClick={clickHandler}>
      {isOpen ? (
        <i className="bi bi-caret-up-fill"></i>
      ) : (
        <i className="bi bi-caret-down-fill"></i>
      )}
    </button>
  )
}

export default IssueMoreButton
