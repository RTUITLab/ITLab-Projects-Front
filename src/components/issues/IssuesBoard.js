import React, { useEffect, useState } from "react";
import API from "../../api/API";
import NavigationBar from "../utils/NavigationBar";
import LoadSpinner from "../utils/Loader";
import Issue from "./Issue";
import ApiSearchBar from "../utils/ApiSearchBar";
import Button from "react-bootstrap/Button";
import FilterBar from "../utils/FilterBar";

export default function IssuesBoard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [issues, setIssues] = useState({});
  const [data, setData] = useState({});
  const [pagesCount, setPagesCount] = useState({});
  useEffect(() => {
    loadIssuesPage();
  }, []);
  async function loadIssuesPage() {
    await API.get(`/issues`)
      .then((response) => {
        updateIssues(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }
  function updateIssues(data, isFilter) {
    const issuesList = data.map((issue, index) => (
      <Issue issue={issue} key={index} />
    ));
    setIssues(issuesList);
    setIsFilter(isFilter);
  }

  return (
    <main>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <div className="navigationBarWrapper">
            <FilterBar updateFunc={updateIssues} datatype="issues" />
            {isFilter ? (
              ""
            ) : (
              <NavigationBar
                loadRepositoriesPage={loadIssuesPage}
                pagesCount={pagesCount}
              />
            )}
            <Button className="toggleContent" href="/projects">
              Все проекты
            </Button>
          </div>
          <div className="repsList card-deck mb-3 text-center">{issues}</div>
        </>
      )}
    </main>
  );
}
