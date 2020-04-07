import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Resume from "./components/RESUME";
import Contact from "./components/Contact";

import "bulma";
import "./App.css";

class App extends Component {
  state = {
    projects,
    projects2,
  };

  render() {
    return (
      <div class="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Card} />

          <Resume />
          <Contact />
        </Switch>
      </div>
    );
  }
}
export default App;
