import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    if (this.props.path !== "/") {
      return (
        <div className="footer">
          <small>© {new Date().getFullYear()} José Felipe Quiroga</small>
        </div>
      );
    } else return null;
  }
}

function mapStateToProps({ path }) {
  return { path };
}

export default connect(mapStateToProps)(Footer);
