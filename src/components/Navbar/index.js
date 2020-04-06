import React from "react";
import "bulma";
import "./style.css";

function Navbar() {
  return (
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <p class="navbar-item" id="home">
            Justice Phan
          </p>

          <a class="navbar-item">Portfolio</a>
          <a class="navbar-item">Resume</a>
          <a class="navbar-item">Contact</a>
          <a class="navbar-item" href="https://github.com/JustPhvn">
            GitHub
          </a>
          <a
            class="navbar-item"
            href="https://www.linkedin.com/in/justice-phan/"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
