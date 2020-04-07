import React, { Component } from "react";
import "bulma";
import projects from "./projects.json";
import projects2 from "./projects2.json";

class Portfolio extends Component {
  state = {
    projects,
    projects2,
  };

  render() {
    return (
      <div>
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

export default Portfolio;
