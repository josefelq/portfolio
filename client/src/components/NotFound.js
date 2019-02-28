import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class NotFound extends Component {
  render() {
    const { language } = this.props;
    return (
      <main>
        <div className="not-found">
          <h1>{language === "en" ? "PAGE NOT FOUND" : "PAGINA NO EXISTE"}</h1>
        </div>
      </main>
    );
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
