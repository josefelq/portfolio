import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const ALL_TAGS = ["React", "Redux", "NodeJS", "MongoDB", "NextJS"];

class Tags extends Component {
  render() {
    const language = this.props.language;
    return (
      <div style={{ marginTop: "4vh", marginBottom: "4vh" }}>
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2vh"
          }}
        >
          {language === "en" ? "Technologies" : "Tecnologías"}
        </h5>
        <ul className="tags">
          {ALL_TAGS.map(tag => {
            return (
              <li
                className={`tag ${
                  this.props.state.tags.includes(tag) ? "selected" : ""
                }`}
                key={tag}
                onClick={() => {
                  this.props.changeTags(tag, () => {
                    this.forceUpdate();
                  });
                }}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ state, language }) {
  return { state, language };
}

export default connect(mapStateToProps, actions)(Tags);
