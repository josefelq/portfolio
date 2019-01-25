import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LanguageSwitch from "./LanguageSwitch";
import { NAV } from "../translations/nav";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showLinks: false };
  }

  render() {
    let path = this.props.path;
    return (
      <header>
        <nav>
          <div className="mobile-options">
            <h2 className="logo">
              <Link to="/">JFQ</Link>
            </h2>
            <div
              className="mobile-tab"
              onClick={() => {
                this.setState({ showLinks: !this.state.showLinks });
              }}
            >
              <i
                className={
                  this.state.showLinks
                    ? "fas fa-times fa-lg"
                    : "fas fa-bars fa-lg"
                }
              />
            </div>
          </div>
          <ul className={this.state.showLinks ? "show" : "hide"}>
            <li>
              <Link
                to="/about"
                className={path === "/about" ? "highlight" : ""}
                onClick={() => {
                  this.setState({ showLinks: false });
                }}
              >
                {NAV[this.props.language].about}
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={path === "/portfolio" ? "highlight" : ""}
                onClick={() => {
                  this.setState({ showLinks: false });
                }}
              >
                {NAV[this.props.language].work}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={path === "/contact" ? "highlight" : ""}
                onClick={() => {
                  this.setState({ showLinks: false });
                }}
              >
                {NAV[this.props.language].contact}
              </Link>
            </li>
            <li className="language-switch">
              <LanguageSwitch />
            </li>
          </ul>
          <div className="language-switch-phone">
            <LanguageSwitch />
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({ language, path }) {
  return { language, path };
}

export default connect(mapStateToProps)(Navbar);
