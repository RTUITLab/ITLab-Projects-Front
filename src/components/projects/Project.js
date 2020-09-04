import React from 'react';
import Button from 'react-bootstrap/Button';
import LabelsList from '../labels/LabelsList';
import ReadyBar from '../utils/ReadyBar';
import IssuesCount from '../utils/IssuesCount';
import isoToDDMMYYYY from '../utils/dateParsing';
export default function Project(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        <h2>{props.project.path} - {props.project.humanName}</h2>
        <LabelsList stackTags={props.project.stackTags}/>
      </div>
      <hr />
      <p>{props.project.description}</p>
      <div className="projectFooter">
        <Button href={`/projects/${props.project.path}`}>Репозитории проекта</Button>
        <ReadyBar count={1}/>
        <p className="text-muted">Обновлено {isoToDDMMYYYY(props.project.lastUpdated)}</p>
      </div>
    </div>
  );
}
