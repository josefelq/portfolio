import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class LanguageSwitch extends Component {
  render() {
    return (
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
    );
  }

  handleChange(event) {
    this.props.changeLanguage();
  }
}

export default connect(
  null,
  actions
)(LanguageSwitch);
