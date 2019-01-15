import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../meteor.scss";

class Landing extends Component {
  render() {
    return (
      <main className="landing-page">
        <div className="my-info">
          <h1>
            Hi, I'm Jose Felipe Quiroga, a Full Stack Web Developer currently
            living in Bogotá, Colombia.
          </h1>
          <div className="center-align">
            <Link to="/portfolio"> Check out my work </Link>
          </div>
        </div>
        <div className="sky-container">
          <div className="night">
            {(() => {
              let allStars = new Array(10);
              for (let i = 0; i < allStars.length; i++) {
                allStars[i] = "star" + i;
              }
              let renderStars = allStars.map(star => {
                return <div className="shooting_star" key={star} />;
              });
              return renderStars;
            })()}
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
