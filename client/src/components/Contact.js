import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

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

  async submit(values) {
    let response = await axios.post("/send-email", { values });
    console.log(response);
    if (response.statusText === "OK") {
      // TODO: Show ok dialog
    } else {
      // TODO: Show Not OK dialog
    }
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
