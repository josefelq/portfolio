import React, { Component } from "react";
import { PROJECTS } from "../translations/projects";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
  }

  render() {
    let project = this.state.project;
    let language = this.props.language;
    if (project) {
      return (
        <div className="content">
          <div style={{ marginBottom: "0", minHeight: "100%" }}>
            <div
              className="project-title"
              style={{ marginBottom: "5vh", marginTop: "3vh" }}
            >
              <Link to="/portfolio">
                <i>←{this.props.language === "en" ? "Go back" : "Volver"}</i>
              </Link>
              <h1>{project.name}</h1>
              <div></div>
            </div>

            <div className="carousel-container">
              <Carousel showThumbs={false} infiniteLoop={true}>
                {project.images.map(image => {
                  return (
                    <div key={image.alt}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <p
              style={{
                whiteSpace: "pre-wrap",
                marginTop: "5vh",
                marginBottom: "5vh"
              }}
              className="project-description"
            >
              {project.description[language]}
            </p>
            {project.code ? (
              <div className="links" style={{ marginBottom: "5vh" }}>
                <a
                  href={project.code}
                  className="code-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.language === "en"
                    ? "Source Code"
                    : "Código Fuente"}

                  <i className="fab fa-github" />
                </a>
                <a
                  href={project.website}
                  className="website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.language === "en" ? "Website" : "Pagina Web"}
                </a>
              </div>
            ) : (
              <div
                style={{
                  marginBottom: "5vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#23272a",
                    padding: "1rem",
                    border: "1px solid white"
                  }}
                >
                  {this.props.language === "en"
                    ? "The source code for this project is private "
                    : "El codigo para este proyecto es privado "}{" "}
                  :(
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else return null;
  }

  componentDidMount() {
    // Find project
    const projectName = this.props.match.params.projectname;
    for (let i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].name === projectName) {
        this.setState({ project: PROJECTS[i] });
        break;
      }
    }
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(mapStateToProps)(ProjectPage);
