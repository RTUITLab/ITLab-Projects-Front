import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../api/API';
import Issue from '../issues/Issue';
import IssuesList from '../issues/IssuesList';
import LoadSpinner from '../utils/Loader';
import RepInfo from '../utils/RepInfo';

export default function RepDetails() {
  const [issues, setIssues] = useState({});
  const [rep, setRep] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { platform, repPath } = useParams();

  useEffect(() => {
    API.get(`/reps/${repPath}/issues?state=all&platform=${platform}`)
      .then((response) => {
        setIssues(response.data);
        setIsLoading(false);
        console.log(issues);
      })
      .catch((err) => console.log(err));
    API.get(`/reps/${repPath}?platform=${platform}`)
      .then((response) => {
        setRep(response.data);
        console.log(rep);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) {
    return (
      <LoadSpinner />
    );
  }
  const openedIssues = issues.filter((issue) => (issue.state === 'open' || issue.state === 'opened') && issue.pull_request.url === "").map((issue, index) => <Issue issue={issue} key={index} />);
  const closedIssues = issues.filter((issue) => issue.state === 'closed' && issue.pull_request.url === "").map((issue, index) => <Issue issue={issue} key={index} />);
  return (
    <>
      <header>
        <h1>{repPath}</h1>
        <hr />
        <RepInfo rep={rep}/>
      </header>
      <main>
        <IssuesList openedIssues={openedIssues} closedIssues={closedIssues} />
      </main>
    </>
  );
}
