import React, { Component } from "react";
import Particles from "react-particles-js";

import Hello from "./Hello";

import { OPTIONS } from "../config/particle";

class Landing extends Component {
  render() {
    return (
      <main className="landing-page">
        <Hello />
        <Particles params={OPTIONS} className="space" />
      </main>
    );
  }
}

export default Landing;
