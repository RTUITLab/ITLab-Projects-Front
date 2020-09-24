import React, { useEffect, useRef, useState } from 'react';
import API from '../../api/API';
import ApiSearchBar from './ApiSearchBar';
import LabelsDropdown from './LabelsDropdown';

export default function FilterBar(props) {
  const [queryText, setQueryText] = useState("");
  const [queryLabels, setQueryLabels] = useState("");
  const [labels, setLabels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadLabels()
  }, []);

  useEffect(() => {
    let params = new URLSearchParams();
    queryText !== "" ? params.set("filter", queryText) : params.delete("filter");
    queryLabels !== "" ? params.set("labels", queryLabels) : params.delete("labels");
    filter(params);
  }, [queryText, queryLabels]);

  async function loadLabels() {
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
  function filter(query) {
    API.get(`/${props.datatype}?${query}`)
      .then((response) => {
        props.updateFunc(response.data, true)
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="filterBar">
      <ApiSearchBar setQuery={setQueryText} datatype="issues"/>
      {isLoading ? "" : <LabelsDropdown setQuery={setQueryLabels} labels={labels}/>}
    </div>
  );
}
