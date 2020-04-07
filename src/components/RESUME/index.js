import React from "react";
import "bulma";
import resume from "../../RESUME.pdf";

function Resume() {
  return (
    <div class="column is-centered">
      <div class="card">
        <div class="card-image">
          <iframe
            src={resume}
            frameborder="0"
            width="100%"
            height="1150px"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resume;
