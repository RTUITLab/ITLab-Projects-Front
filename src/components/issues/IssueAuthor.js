import React from 'react'

function IssueAuthor(props) {

  const { author } = props

  const authorAvatar = {
    background: `center / cover url("${author.avatar_url}")`
  }

  return (
    <div className="tasks-author">
      <div className="tasks-author-img" style={authorAvatar}></div>
      <a href={author.html_url} target="_blank" rel="noreferrer" className="tasks-author-link"><p className="tasks-author-name">{author.login}</p></a>
    </div>
  )
}

export default IssueAuthor