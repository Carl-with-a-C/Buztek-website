import React from "react";

const Landing = () => {
  return (
    <main>
      <div className="landing-container">
        <div className="header">
          <h1 className="splash-heading">DESIGN BUILD SECURE</h1>
        </div>
        <div className="splash-image-container">
          <img
            className="splash-image"
            src="https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="hardware computer board"
          />
        </div>
        <div className="splash-blurb-container">
          <div className="splash-blurb">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              vel elit.
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
