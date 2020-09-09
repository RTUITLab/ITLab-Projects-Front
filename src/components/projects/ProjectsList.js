import React, { useEffect, useState } from 'react';
import API from '../../api/API';
import Project from './Project';
import LoadSpinner from '../utils/Loader';
import Button from 'react-bootstrap/Button';
import SearchBar from '../utils/SearchBar';
import LabelsDropdown from '../utils/LabelsDropdown';


export default function ProjectsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState({});
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    loadProjects()
  }, []);
  async function loadProjects() {
    await API.get(`/projects`)
      .then((response) => {
        const projectsList = response.data.map((project, index) => <Project project={project} key={index} />);
        setProjects(projectsList);
        setData(response.data);
      })
      .catch((err) => console.log(err));
    await API.get(`/labels`)
      .then((response) => {
        const labelOptions = response.data.labels.map((label, index) => ({
          key: index,
          text: label,
          value: label,
        }));
        setLabels(labelOptions);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  function updateProjects(processedData) {
    const projectsList = processedData.map((project, index) => <Project project={project} key={index} />);
    setProjects(projectsList);
  }

  return (
    <div className="contentWrapper">
      <div className="navigationBarWrapper">
        {isLoading ? "" :
          <>
            <SearchBar data={data} updateFunc={updateProjects} searchField="projectName"/>
            <LabelsDropdown data={data} updateFunc={updateProjects} labels={labels}/>
          </>
          }
        <Button className="toggleContent" href="/reps">Все репозитории</Button>
      </div>
      <main>
        {isLoading ? <LoadSpinner /> : (
          <>
            <div className="projectsList">
              {projects}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
