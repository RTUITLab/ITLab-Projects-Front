import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class LastUpdated extends React.Component {
  render() {
    const date = new Date(this.props.rep.updated_at);
    return (
      <div className="lastUpdated">
        <FontAwesomeIcon icon={['far', 'clock']} />
        {' '}
        Обновлено:
        <p>{date.toLocaleDateString()}</p>
      </div>
    );
  }
}
