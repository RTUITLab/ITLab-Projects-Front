import React from 'react';
import Button from 'react-bootstrap';

export default function TagFilter(props) {
  function dataSearch(e) {
    const value = e.target.value;
    let filteredData;
    filteredData = props.data.filter(elem => {
      const labels = elem.stackTags.directions.concat(elem.stackTags.databases, elem.stackTags.frameworks);
      return (!value || labels.includes(value))
    });
    props.updateFunc(filteredData)
  }
  return (
    <div className="tagFilter">
      <input className="form-control" type="text" placeholder="Поиск" aria-label="Search" onChange={dataSearch}/>
    </div>
  );
}
