import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Project extends Component {
  render() {
    return (
      <div
        className="project"
        onClick={() => {
          this.props.history.push(`/portfolio/${this.props.project.name}`);
        }}
      >
        <img
          src={this.props.project.images[0].src}
          alt={this.props.project.name}
        />
        <div>
          <div>
            <h2>{this.props.project.name}</h2>
          </div>
          <ul>
            {this.props.project.tags.map(tag => {
              return (
                <li className="small-tag" key={tag}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Project);
