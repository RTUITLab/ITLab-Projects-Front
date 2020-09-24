import React from 'react';
import Button from 'react-bootstrap/Button';
import LabelsList from '../labels/LabelsList';
import ReadyBar from '../utils/ReadyBar';
import isoToDDMMYYYY from '../utils/dateParsing';
export default function Project(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        <h2>{props.project.path} {props.project.humanName ? "- "+props.project.humanName : ""}</h2>
        {props.project.labels.length !== 0?  <LabelsList labels={props.project.labels}/> : "" }
      </div>
      <hr/>
      {props.project.description ? <p>{props.project.description}</p> : <p>Описание не приведено</p> }
      <div className="projectFooter">
        <Button href={`/projects/${props.project.path}`}>Подробнее</Button>
        <ReadyBar count={1}/>
        <p className="text-muted">Обновлено {isoToDDMMYYYY(props.project.lastUpdated)}</p>
      </div>
    </div>
  );
}
