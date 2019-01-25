import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Contact extends Component {
  render() {
    return <main>Contact</main>;
  }

  componentDidMount() {
    this.props.changePath("/contact");
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(
  mapStateToProps,
  actions
)(Contact);
