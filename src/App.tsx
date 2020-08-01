/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import IndexPage from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
