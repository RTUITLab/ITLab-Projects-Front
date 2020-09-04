import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function ReadyBar(props) {
  return (
    <div className="readyBar">
      <p className="text-muted">Готовность:</p>
      <ProgressBar variant="success" now={1 / (props.count + 1) * 100} />
    </div>
  );
}
