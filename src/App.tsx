import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ProblemsPage from "./pages/Problems";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Problem from "./components/Problem";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/problems">
          <ProblemsPage />
        </Route>
        <Route exact path="/problems/problem/:problemTitle">
          <Problem />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
