import React from 'react';

export default function IssueLabels(props) {

  const labelsList = props.labels.map(
    (label) => (
      <p className="label" style={{backgroundColor: '#'+label.color}}>{label.name}</p>
    ));

  return (
    <div className="issueLabels">
      {labelsList}
    </div>
  )
}
