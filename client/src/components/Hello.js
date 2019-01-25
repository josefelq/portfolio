import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HELLO } from "../translations/hello";

class Hello extends Component {
  render() {
    return (
      <div className="my-info center-text">
        <h1>
          {HELLO[this.props.language][0]}
          <span className="highlight">José</span>. <br />
          {HELLO[this.props.language][1]}
        </h1>
        <div className="center-align">
          <Link to="/portfolio" className="work-btn">
            {HELLO[this.props.language][2]}
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ language }) {
  return { language };
}
export default connect(mapStateToProps)(Hello);
