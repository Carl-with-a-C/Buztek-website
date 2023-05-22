import React from "react";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="nav-projects-container">
          <p>PROJECTS +</p>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#">
                <p>ABOUT</p>
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <p>SERVICES</p>
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <p>PROCESS</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-logo-container">
          <a href="#">
            <h5>BUZTEK</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
