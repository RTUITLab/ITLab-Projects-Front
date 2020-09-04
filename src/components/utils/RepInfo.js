import React from 'react';
import Contributors from './Contributors';

export default function RepInfo(props) {
  return (
    <div className="repDetailsInfo">
      <p>{props.rep.meta.description}</p>
      <Contributors users={props.rep.contributors}/>
    </div>
  );
}
