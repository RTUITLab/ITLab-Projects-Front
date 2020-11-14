import React from "react";

export default function IssuesList(props) {
  return (
    <div className="issuesList card-deck mb-3 text-center">
      <div className="card mb-4">
        <h3>Нужно сделать</h3>
        <div className="scrollbar">{props.openedIssues}</div>
      </div>
      <div className="card mb-4">
        <h3>В процессе</h3>
      </div>
      <div className="card mb-4">
        <h3>Готово</h3>
        <div className="scrollbar">{props.closedIssues}</div>
      </div>
    </div>
  );
}
