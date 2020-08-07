import React, { useEffect, useState } from 'react';
import API from '../../api/API';
import NavigationBar from '../utils/NavigationBar';
import LoadSpinner from '../utils/Loader';
import { useParams } from 'react-router-dom';
import Rep from '../reps/Rep';

export default function ProjectDetails(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [reps, setReps] = useState({});
  const [pagesCount, setPagesCount] = useState({});
  const { projectPath } = useParams();
  useEffect(() => {
    loadProjectRepositories(1)
  }, []);
  async function loadProjectRepositories(page) {
    await API.get(`/projects/${projectPath}?page=${page}`)
      .then((response) => {
        setPagesCount(parseInt(response.headers['x-total-pages']));
        const repsList = response.data.map((rep, index) => <Rep rep={rep} key={index} />);
        setReps(repsList);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main>
      {isLoading ? <LoadSpinner /> : (
        <>
          <NavigationBar loadRepositoriesPage={loadProjectRepositories} pagesCount={pagesCount} />
          <div className="repsList card-deck mb-3 text-center">
            {reps}
          </div>
        </>
      )}
    </main>
  );
}
