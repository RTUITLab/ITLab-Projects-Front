import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Label from './Label';
export default function LabelsList(props) {
  const [labels, setLabels] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    makeLabelsList()
  }, []);

  function makeLabelsList() {
    let labelsList = props.stackTags.directions.map((tag, index) => <Label tag={tag} key={index} />);
    labelsList.push(props.stackTags.databases.map((tag, index) => <Label tag={tag} key={index} />));
    labelsList.push(props.stackTags.frameworks.map((tag, index) => <Label tag={tag} key={index} />));
    setLabels(labelsList);
    setIsLoading(false)
  }

  return (
    <div className="labelsContainer disableScrollbars">
      <FontAwesomeIcon icon="angle-left"/>
      <div className="labelsList">
        {isLoading ? '' : labels}
      </div>
      <FontAwesomeIcon icon="angle-right" />
    </div>
  );
}
