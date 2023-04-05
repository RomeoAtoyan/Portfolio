import React from "react";
import "./Navbar.css";
import "animate.css";

const Navbar = () => {
  return (
    <nav className="navbar_container animate__animated animate__fadeInDown ">
      <div className="nav_left">
        <h1>R</h1>
      </div>
      <div className="nav_right">
        <ul>
          <li>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/romeo-atoyan-31b661238/"
              rel="noreferrer"
            >
              LinkedIn
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href="https://github.com/RomeoAtoyan"
              rel="noreferrer"
            >
              Github
              <i class="fa-brands  fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
