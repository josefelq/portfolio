import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import avatar from "../resources/avatar.png";

class About extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <h1>Who am I?</h1>
          <div className="info-face">
            <div className="info">
              <h3>
                I'm José Felipe Quiroga, a full stack web developer currently
                based in Bogotá, Colombia.
              </h3>
              <p>
                I love making websites that are fast, responsive and interactive
                to use. User experience is one of my most ....
              </p>
            </div>
            <div className="face">
              <img src={avatar} alt="My face" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.changePath("/about");
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(
  mapStateToProps,
  actions
)(About);
