import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import ContactForm from "./ContactForm";

class Contact extends Component {
  render() {
    const language = this.props.language;
    return (
      <div className="content">
        <div className="container contact-form">
          <h1>
            {language === "en"
              ? "Interested? Let's talk."
              : "Interesad@? Hablemos."}
          </h1>
          <ContactForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }

  submit(values) {
    console.log(values);
  }

  componentDidMount() {
    this.props.changePath("/contact");
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(
  mapStateToProps,
  actions
)(Contact);
