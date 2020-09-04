import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Language(props) {
  return (
    <div className="repLanguage">
      {props.rep.language ? (
        <p>
          <FontAwesomeIcon icon="code" />
          {' '}
          {props.rep.language}
        </p>
      ) : ''}
    </div>
  );
}
