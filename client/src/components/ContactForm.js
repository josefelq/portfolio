import React, { Component } from "react";
import { connect } from "react-redux";
import LoaderSpinner from "./LoaderSpinner";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { language } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(this.state, () => {
            this.setState({ name: "", email: "", subject: "", message: "" });
          });
        }}
        autoComplete="off"
      >
        <div className="form-row name-field">
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.name}
            required
            name="name"
            type="text"
            maxLength="50"
            placeholder={language === "en" ? "Name" : "Nombre"}
          />
        </div>
        <div className="form-row email-field">
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.email}
            required
            name="email"
            type="email"
            maxLength="50"
            placeholder={language === "en" ? "Email" : "Correo"}
          />
        </div>
        <div className="form-row subject-field">
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.subject}
            required
            name="subject"
            type="text"
            maxLength="50"
            placeholder={language === "en" ? "Subject" : "Asunto"}
          />
        </div>
        <div className="form-row message-box">
          <textarea
            style={{ whiteSpace: "pre-line" }}
            onChange={this.handleChange.bind(this)}
            value={this.state.message}
            rows="10"
            cols="30"
            required
            name="message"
            type="textarea"
            maxLength="1000"
            placeholder={language === "en" ? "Message" : "Mensaje"}
          ></textarea>
        </div>
        <div className="form-button-container">
          {!this.props.allowSubmit ? (
            <LoaderSpinner />
          ) : (
            <input
              disabled={!this.props.allowSubmit}
              className="form-button"
              type="submit"
              value={language === "en" ? "Submit" : "Enviar"}
            />
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(mapStateToProps)(ContactForm);
