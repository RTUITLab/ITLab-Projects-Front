// TODO: Save downloaded reps/issues
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faChevronDown,
  faChevronUp,
  faTasks,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RepsList from "./components/reps/RepsList";
import RepDetails from "./components/reps/RepDetails";
import ProjectsList from "./components/projects/ProjectsList";
import ProjectDetails from "./components/projects/ProjectDetails";
import ProjectIssues from "./components/projects/ProjectIssues";
import IssuesBoard from "./components/issues/IssuesBoard";

library.add(
  faGithub,
  faGitlab,
  faCode,
  faClock,
  faChevronDown,
  faChevronUp,
  faQuestionCircle,
  faTasks,
  faAngleLeft,
  faAngleRight
);

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/projects/reps/:platform/:repPath">
          <RepDetails />
        </Route>
        <Route path="/projects/reps">
          <RepsList />
        </Route>
        <Route path="/projects/issues">
          <IssuesBoard />
        </Route>
        <Route path="/projects/:projectPath">
          <ProjectIssues />
        </Route>
        <Route path="/projects">
          <ProjectsList url={props.projectsAPIUrl} />
        </Route>
        <Route path="/projects/reps?page=:pageNumber"></Route>
      </Switch>
    </Router>
  );
}
