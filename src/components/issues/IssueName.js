import React from 'react'

function IssueName(props) {

  const { url, name, isOpen } = props

  return (
    <a href={url} target="_blank" rel="noreferrer" className="tasks-name-link"><p className={`tasks-name ${isOpen ? `tasks-name_full` : ''}`}>{name}</p></a>
  )
}

export default IssueName