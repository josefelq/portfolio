import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    if (this.props.location.pathname !== "/") {
      return (
        <div className="footer">
          <small>© {new Date().getFullYear()} José Felipe Quiroga</small>
        </div>
      );
    } else return null;
  }
}

export default withRouter(Footer);
