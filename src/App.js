// TODO: Save downloaded reps/issues
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faChevronDown, faChevronUp, faTasks, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RepsList from './components/reps/RepsList';
import RepDetails from './components/reps/RepDetails';
import ProjectsList from './components/projects/ProjectsList';
import ProjectDetails from './components/projects/ProjectDetails';

library.add(faGithub, faGitlab, faCode, faClock, faChevronDown, faChevronUp,
            faQuestionCircle, faTasks, faAngleLeft, faAngleRight);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/reps/:platform/:repPath">
          <RepDetails/>
        </Route>
        <Route path="/reps">
          <RepsList/>
        </Route>
        <Route path="/projects/:projectPath">
          <ProjectDetails/>
        </Route>
        <Route path="/projects">
          <ProjectsList/>
        </Route>
        <Route path="/reps?page=:pageNumber">

        </Route>
      </Switch>
    </Router>
  );
}
