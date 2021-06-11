import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import Issue from "../issues/Issue";
import IssuesList from "../issues/IssuesList";
import LoadSpinner from "../utils/Loader";
import Project from "./Project";

export default function ProjectIssues() {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { projectPath } = useParams();

  useEffect(() => {
    API.get(`/issues/${projectPath}`)
      .then((response) => {
        setIssues(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) {
    return <LoadSpinner />;
  }
  const openedIssues = issues
    .filter((issue) => issue.state === "open" || issue.state === "opened")
    .map((issue, index) => <Issue issue={issue} key={index} />);
  const closedIssues = issues
    .filter((issue) => issue.state === "closed")
    .map((issue, index) => <Issue issue={issue} key={index} />);
  return (
    <>
      <header>
        <h1>{projectPath}</h1>
        <hr />
      </header>
      <main>
        <IssuesList
          openedIssues={openedIssues}
          wipIssues={wipIssues}
          closedIssues={closedIssues}
        />
      </main>
    </>
  );
}
