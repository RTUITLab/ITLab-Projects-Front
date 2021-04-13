import React from "react";
import Button from "react-bootstrap/Button";

export default class MoreButton extends React.Component {
  render() {
    return (
      <Button
        href={`/reps/${this.props.rep.platform}/${this.props.rep.path_with_namespace}`}
      >
        Подробнее
      </Button>
    );
  }
}
