import React from "react";
import { Link } from "react-router-dom";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.project.image,
            logo: "/assets/image/logo.png"
        }
        this.activateGif = this.activateGif.bind(this);
        this.deactivateGif = this.deactivateGif.bind(this);
        this.logoHover = this.logoHover.bind(this);
        this.logoUnhover = this.logoUnhover.bind(this);
    }

    activateGif() {
        this.setState({ image: this.state.image.replace('.jpg', '.gif') });
    }
    logoHover() {
        this.setState({ logo: "/assets/image/logo-blue.png" });
    }
    deactivateGif() {
        this.setState({ image: this.state.image.replace('.gif', '.jpg') });
    }
    logoUnhover() {
        this.setState({ logo: "/assets/image/logo.png" });
    }

    render() {

        return (
            <div onMouseEnter={this.activateGif} onMouseLeave={this.deactivateGif}>
                <a href={this.props.project.url} target="_blank">
                    <h2 className="project-title">{this.props.project.title}</h2>
                </a>
                <a href={this.props.project.github} target="_blank">
                <img className="github-icon" onMouseEnter={this.logoHover} onMouseLeave={this.logoUnhover} src={this.state.logo}></img>
                </a>
                <a href={this.props.project.url} target="_blank">
                    <img className="project-image" src={this.state.image}></img>
                </a>
                <span className="project-description">{this.props.project.description}</span>
            </div>
        )
    }
}

export default Project;