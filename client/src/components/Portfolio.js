import React, { Component } from "react";
import { connect } from "react-redux";
import Tags from "./Tags";
import Projects from "./Projects";

import * as actions from "../actions";

class Portfolio extends Component {
  render() {
    return (
      <div className="content">
        <Tags />
        <Projects />
      </div>
    );
  }
  componentDidMount() {
    this.props.changePath("/portfolio");
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(
  mapStateToProps,
  actions
)(Portfolio);
