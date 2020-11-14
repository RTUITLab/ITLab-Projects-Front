import React from "react";
import Loader from "react-loader-spinner";

export default class LoadSpinner extends React.Component {
  render() {
    return (
      <div className="load-spinner">
        <Loader type="Oval" color="green" height={150} width={150} />
      </div>
    );
  }
}
