import React, { useEffect, useState } from 'react';
import API from '../../api/API';
import NavigationBar from '../utils/NavigationBar';
import LoadSpinner from '../utils/Loader';
import Rep from './Rep';
import ApiSearchBar from '../utils/ApiSearchBar';
import Button from 'react-bootstrap/Button';

export default function RepsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [reps, setReps] = useState({});
  const [data, setData] = useState({});
  const [pagesCount, setPagesCount] = useState({});
  useEffect(() => {

    loadRepositoriesPage(1)
  }, []);
  async function loadRepositoriesPage(page) {
    await API.get(`/reps?page=${page}`)
      .then((response) => {
        setPagesCount(parseInt(response.headers['x-total-pages']));
        updateReps(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }
  function updateReps(data, isFilter) {
    const repsList = data.map((rep, index) => <Rep rep={rep} key={index} />);
    setReps(repsList);
    setIsFilter(isFilter)
  }

  return (
    <main>
      {isLoading ? <LoadSpinner /> : (
        <>
          <div className="navigationBarWrapper">
            <ApiSearchBar updateFunc={updateReps}/>
            {isFilter ? "" :
              <NavigationBar loadRepositoriesPage={loadRepositoriesPage} pagesCount={pagesCount} />}
            <Button className="toggleContent" href="/projects">Все проекты</Button>
          </div>
          <div className="repsList card-deck mb-3 text-center">
            {reps}
          </div>
        </>
      )}
    </main>
  );
}
