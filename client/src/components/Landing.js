import React, { Component } from "react";
import Particles from "react-particles-js";
import { connect } from "react-redux";
import * as actions from "../actions";

import LanguageSwitch from "./LanguageSwitch";

import Hello from "./Hello";

import { OPTIONS } from "../config/particle";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "7",
            paddingTop: "1rem"
          }}
        >
          <LanguageSwitch />
        </div>
        <Hello />
        <Particles params={OPTIONS} className="space" />
      </div>
    );
  }
}

export default connect(null, actions)(Landing);
