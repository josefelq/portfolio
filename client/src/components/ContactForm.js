import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const { language } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <Field
            name="Name"
            component="input"
            type="text"
            maxLength="50"
            placeholder={language === "en" ? "Name" : "Nombre"}
          />
        </div>
        <div className="form-row">
          <Field
            name="Email"
            component="input"
            type="email"
            maxLength="50"
            placeholder={language === "en" ? "Email" : "Correo"}
          />
        </div>
        <div className="form-row">
          <Field
            name="Subject"
            component="input"
            type="text"
            maxLength="50"
            placeholder={language === "en" ? "Subject" : "Asunto"}
          />
        </div>
        <div className="form-row message-box">
          <Field
            name="Message"
            component="textarea"
            type="text"
            maxLength="1000"
            placeholder={language === "en" ? "Message" : "Mensaje"}
          />
        </div>
        <div className="form-button-container">
          <button className="form-button" type="submit">
            {language === "en" ? "Submit" : "Enviar"}
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ language }) {
  return { language };
}

ContactForm = connect(mapStateToProps)(ContactForm);

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(ContactForm);

export default ContactForm;
