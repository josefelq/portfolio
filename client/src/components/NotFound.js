import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class NotFound extends Component {
  render() {
    return <main>NOT FOUND</main>;
  }
  componentDidMount() {
    this.props.changePath("/notfound");
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(
  mapStateToProps,
  actions
)(NotFound);
