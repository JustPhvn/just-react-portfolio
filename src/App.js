import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import projects from "./projects.json";
import projects2 from "./projects2.json";
import "bulma";
import "./App.css";

class App extends Component {
  state = {
    projects,
    projects2,
  };

  // firstHalf() {
  //   for (let i = 0; i < 3; i++) {
  //     return (
  //       <Card
  //         image={projects[i].image}
  //         appLink={projects[i].appLink}
  //         title={projects[i].title}
  //         about={projects[i].about}
  //         gitLink={projects[i].gitLink}
  //       />
  //     );
  //   }
  // }

  render() {
    return (
      <div class="container">
        <Navbar />
        <div class="tile is-ancestor">
          {this.state.projects.map((project) => (
            <Card
              image={project.image}
              appLink={project.appLink}
              title={project.title}
              about={project.about}
              gitLink={project.gitLink}
            />
          ))}
        </div>
        <div class="tile is-ancestor">
          {this.state.projects2.map((project) => (
            <Card
              image={project.image}
              appLink={project.appLink}
              title={project.title}
              about={project.about}
              gitLink={project.gitLink}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
