import React, { Component } from "react";
import { connect } from "react-redux";
import Tags from "./Tags";
import Projects from "./Projects";

import * as actions from "../actions";

class Portfolio extends Component {
  render() {
    return (
      <div className="content">
        <h1
          className="center"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2vh"
          }}
        >
          {this.props.language === "en" ? "My Projects" : "Mis Proyectos"}
        </h1>
        <Tags />
        <Projects />
      </div>
    );
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(mapStateToProps, actions)(Portfolio);
