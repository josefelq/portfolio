import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="projects-container">
          {this.props.state.projects.map(proj => {
            return <Project project={proj} key={proj.name} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ state }) {
  return { state };
}

export default connect(mapStateToProps)(Projects);
