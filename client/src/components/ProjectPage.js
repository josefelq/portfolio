import React, { Component } from "react";
import { PROJECTS } from "../translations/projects";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          <div className="container">
            <div className="project-title">
              <h1>{project.name}</h1>
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
            <p className="project-description">
              {project.description[language]}
            </p>
            <div className="links">
              <a
                href={project.code}
                className="code-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
                <i className="fab fa-github" />
              </a>
              <a
                href={project.website}
                className="website-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
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
