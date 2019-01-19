import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <h2 className="logo">
            <Link to="/">L</Link>
          </h2>
          <ul>
            <li />
            <li>
              <Link to="/about">A</Link>
            </li>
            <li>
              <Link to="/portfolio">P</Link>
            </li>
            <li>
              <Link to="/contact">C</Link>
            </li>
          </ul>
          <div className="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              defaultChecked
              onChange={this.handleChange.bind(this)}
            />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
              <span className="onoffswitch-inner" />
              <span className="onoffswitch-switch" />
            </label>
          </div>
        </nav>
      </header>
    );
  }

  handleChange(event) {
    this.props.changeLanguage();
  }
}

export default connect(
  null,
  actions
)(Navbar);
