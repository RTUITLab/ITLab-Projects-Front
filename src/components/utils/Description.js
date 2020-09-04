import React from 'react';

export default class Description extends React.Component {
  render() {
    return (
      <p className="repDescription text-muted">
        {this.props.rep.description ? this.props.rep.description : 'Описание не приведено'}
      </p>
    );
  }
}
