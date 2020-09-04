import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IssuesCount(props) {
  return (
    <div className="issuesCount">
      <FontAwesomeIcon icon="tasks"/>
      <p className="text-muted">{props.count}</p>
    </div>
  );
}
