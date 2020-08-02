/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import IndexPage from "./pages/index";
import ProjectPage from "./pages/projects";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <Router>
        <Global
          styles={css`
            body {
              background-color: #f0f2f5;
            }
          `}
        />
        <TransitionGroup>
          <CSSTransition
            // key={}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <Switch>
              <Route path="/" exact>
                <IndexPage />
              </Route>
              <Route path="/projects">
                <ProjectPage />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Router>
    </div>
  );
}

export default App;
