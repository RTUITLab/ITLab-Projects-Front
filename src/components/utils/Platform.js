import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Platform extends React.Component {
  render() {
    return (
      <>
        {this.props.rep.platform === "github" ? (
          <a href={this.props.rep.html_url}>
            <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
          </a>
        ) : (
          <a href={this.props.rep.html_url}>
            <FontAwesomeIcon icon={["fab", "gitlab"]} /> GitLab
          </a>
        )}
      </>
    );
  }
}
