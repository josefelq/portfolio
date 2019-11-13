import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";
import ContactForm from "./ContactForm";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { showThanks: false, allowSubmit: true };
  }
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
          <ContactForm
            handleSubmit={this.submit.bind(this)}
            allowSubmit={this.state.allowSubmit}
          />
          <b style={{ display: "flex", justifyContent: "center", margin: "0" }}>
            {this.state.showThanks
              ? language === "en"
                ? "Thank you! We'll be in contact very soon."
                : "Gracias! Estaremos en contacto muy pronto."
              : null}
          </b>
        </div>
      </div>
    );
  }

  submit(values, reset) {
    if (this.state.allowSubmit) {
      this.setState({ allowSubmit: false }, () => {
        axios.post("/send-email", values).then(res => {
          this.setState({ showThanks: true, allowSubmit: true }, () => {
            setTimeout(() => {
              this.setState({ showThanks: false });
            }, 5000);
            reset();
          });
        });
      });
    }
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(mapStateToProps, actions)(Contact);
