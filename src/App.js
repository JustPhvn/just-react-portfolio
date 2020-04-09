import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resume from "./components/RESUME";
import Contact from "./components/Contact";
import Portfolio from "./Pages/Portfolio";

import "bulma";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
