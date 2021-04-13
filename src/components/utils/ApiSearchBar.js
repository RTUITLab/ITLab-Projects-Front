import React, { useRef } from "react";
import API from "../../api/API";

export default function ApiSearchBar(props) {
  const timeoutRef = useRef(null);
  function handleChange(e) {
    const value = e.target.value.toLowerCase();
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      props.setQuery(value);
    }, 500);
  }
  function dataSearch(value) {
    API.get(`/${props.datatype}?filter=${value}`)
      .then((response) => {
        props.updateFunc(response.data, true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="searchBar">
      <input
        autoFocus
        className="form-control"
        type="text"
        placeholder="Поиск"
        aria-label="Search"
        onChange={handleChange}
      />
    </div>
  );
}
