import React from 'react';
import ReadyBar from '../utils/ReadyBar';
import MoreButton from '../utils/MoreButton';
import LastUpdated from '../utils/LastUpdated';
import Platform from '../utils/Platform';
import Description from '../utils/Description';
import Language from '../utils/Language';

export default function Rep(props) {
  return (
    <div className="rep card mb-4 shadow-sm">
      <h2 className="card-title">{props.rep.name}</h2>
      <Platform rep={props.rep} />
      <Description rep={props.rep} />
      <Language rep={props.rep} />
      <ReadyBar count={props.rep.open_issues_count} />
      <LastUpdated rep={props.rep} />
      <MoreButton rep={props.rep} />
    </div>
  );
}
