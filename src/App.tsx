import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ProblemsPage from "./pages/Problems";
import SolutionsPage from "./pages/Solutions";
import ContactPage from "./pages/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/problems">
          <ProblemsPage />
        </Route>
        <Route path="/solutions">
          <SolutionsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
