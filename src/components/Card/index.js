import React from "react";
import "bulma";
import "./style.css";

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

function Card(props) {
  return (
    <div class="tile is-parent">
      <div class="tile is-child">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img src={props.image} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  <a href={props.appLink}>{props.title}</a>
                </p>
              </div>
            </div>
            <div class="content">
              {props.about}
              <a href={props.gitLink}>GitHub</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
