import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav, Breadcrumb } from "./components";
import routes from "./routes";

export default function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container is-fluid mt-6 pt-3">
          <Breadcrumb />
          {routeComponents}
        </div>
      </div>
    </Router>
  );
}
