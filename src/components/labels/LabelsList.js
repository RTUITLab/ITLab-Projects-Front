import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "./Label";
export default function LabelsList(props) {
  const [labels, setLabels] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    makeLabelsList();
  }, [props]);

  function makeLabelsList() {
    let labelsList = props.labels.map((label, index) => (
      <Label label={label.name} key={index} />
    ));
    setLabels(labelsList);
    setIsLoading(false);
  }

  return (
    <div className="labelsContainer disableScrollbars">
      <FontAwesomeIcon icon="angle-left" />
      <div className="labelsList">{isLoading ? "" : labels}</div>
      <FontAwesomeIcon icon="angle-right" />
    </div>
  );
}
