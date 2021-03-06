import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import { ABOUT } from "../translations/about";

import HojaDeVida from "../static/hojadevida.pdf";
import Resume from "../static/resume.pdf";

class About extends Component {
  render() {
    let language = this.props.language;
    return (
      <div className="content">
        <div className="container">
          <h1>{ABOUT[language][0]}</h1>
          <div className="info-face">
            <div className="info">
              <h3>{ABOUT[language][1]}</h3>
              <p>{ABOUT[language][2]}</p>
              <br />
              <p>
                {ABOUT[language][3]}
                <a
                  href={language === "en" ? Resume : HojaDeVida}
                  download={language === "en" ? "Resume.pdf" : "HojaDeVida.pdf"}
                  className="resume-link"
                >
                  {ABOUT[language][4]}
                </a>
                .
              </p>
            </div>
            <div className="face">
              <img src="/avatar.jpg" alt="My face" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(mapStateToProps, actions)(About);
