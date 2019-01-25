import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Portfolio extends Component {
  render() {
    return <main>Portfolio</main>;
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
