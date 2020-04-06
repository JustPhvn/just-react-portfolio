import React from "react";
import "bulma";
import "./style.css";

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
