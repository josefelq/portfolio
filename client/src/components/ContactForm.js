import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const { language } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row name-field">
          <Field
            name="name"
            component="input"
            type="text"
            maxLength="50"
            placeholder={language === "en" ? "Name" : "Nombre"}
          />
        </div>
        <div className="form-row email-field">
          <Field
            name="email"
            component="input"
            type="email"
            maxLength="50"
            placeholder={language === "en" ? "Email" : "Correo"}
          />
        </div>
        <div className="form-row subject-field">
          <Field
            name="subject"
            component="input"
            type="text"
            maxLength="50"
            placeholder={language === "en" ? "Subject" : "Asunto"}
          />
        </div>
        <div className="form-row message-box">
          <Field
            name="message"
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
