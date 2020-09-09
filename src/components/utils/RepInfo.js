import React from 'react';
import Contributors from './Contributors';

export default function RepInfo(props) {
  return (
    <div className="row mb-4">
      <p className="col-md-8">{props.rep.meta.description}</p>
      <Contributors users={props.rep.contributors}/>
    </div>
  );
}
