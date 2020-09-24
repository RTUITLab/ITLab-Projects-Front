import React, { useEffect, useState } from 'react';
import API from '../../api/API';
import Project from './Project';
import LoadSpinner from '../utils/Loader';
import Button from 'react-bootstrap/Button';
import SearchBar from '../utils/SearchBar';
import LabelsDropdown from '../utils/LabelsDropdown';
import FilterBar from '../utils/FilterBar';


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
        const labelOptions = response.data.map((label, index) => ({
          key: index,
          text: label.name,
          value: label.name,
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
            <FilterBar updateFunc={updateProjects} datatype="projects"/>
          </>
          }
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
