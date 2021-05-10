import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"

import ProjectBoard from "./components/projects/ProjectBoard"
import IssueBoard from "./components/issues/IssueBoard"
import ProjectDetails from "./components/details/ProjectDetails"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/projects" component={ProjectBoard} />
        <Route exact path="/projects/issues" component={IssueBoard} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </Router>
  )
}

export default App
