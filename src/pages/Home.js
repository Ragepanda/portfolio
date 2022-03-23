import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeImage: "/assets/image/resume.png",
            settingsImage: "/assets/image/settings.png",
            contactImage: "/assets/image/contact-us.png",
            logoImage: "/assets/image/logo.png",
            resumeHeaderClass: "",
            settingsHeaderClass: "",
            contactImageHeaderClass: "",
            logoImageHeaderClass: ""
        };
        this.resumeHover = this.resumeHover.bind(this);
        this.resumeLeave = this.resumeLeave.bind(this);
        this.settingsHover = this.settingsHover.bind(this);
        this.settingsLeave = this.settingsLeave.bind(this);
        this.contactHover = this.contactHover.bind(this);
        this.contactLeave = this.contactLeave.bind(this);
        this.logoHover = this.logoHover.bind(this);
        this.logoLeave = this.logoLeave.bind(this);
    }

    resumeHover() { this.setState({ resumeImage: "/assets/image/resume-blue.png", resumeHeaderClass: "highlighted" }); }

    resumeLeave() { this.setState({ resumeImage: "/assets/image/resume.png", resumeHeaderClass: "" }); }

    settingsHover() { this.setState({ settingsImage: "/assets/image/settings-blue.png", settingsHeaderClass: "highlighted" }); }

    settingsLeave() { this.setState({ settingsImage: "/assets/image/settings.png", settingsHeaderClass: "" }); }

    contactHover() { this.setState({ contactImage: "/assets/image/contact-us-blue.png", contactImageHeaderClass: "highlighted" }); }

    contactLeave() { this.setState({ contactImage: "/assets/image/contact-us.png", contactImageHeaderClass: "" }); }

    logoHover() { this.setState({ logoImage: "/assets/image/logo-blue.png", logoImageHeaderClass: "highlighted" }); }

    logoLeave() { this.setState({ logoImage: "/assets/image/logo.png", logoImageHeaderClass: "" }); }


    render() {

        // Need "who am I and what do I do" headliner
        // "Icon made by Freepik from www.flaticon.com"
        return (
            <div className="content">
                <section>
                    <h1>Need a Web Developer?</h1>
                    <p>Hello! My name is John, a Full Stack Web Developer located in the Raleigh area of North Carolina. I specialize in the MySQL, Express, React and Node stack. I am experienced in delivering elegant, reactive, mobile friendly and search engine optimized front end experiences. I'm also skilled at developing sophisticated back end infrastructures complete with high volume databases, secure log-in verification and REST APIs. Looking to hire or need a freelancer? Let's have a talk.</p>
                </section>
                <aside>
                    <div className="link-container" onMouseEnter={this.resumeHover} onMouseLeave={this.resumeLeave}>
                        <Link to="/resume">
                            <img alt="resume" className="zoom" id="resume" src={this.state.resumeImage} />
                            <h3 className={this.state.resumeHeaderClass}>Resume</h3>
                        </Link>
                    </div>

                    <div className="link-container" onMouseEnter={this.settingsHover} onMouseLeave={this.settingsLeave}>
                        <Link to="/work">
                            <img alt="projects" className="spin" src={this.state.settingsImage} />
                            <h3 className={this.state.settingsHeaderClass}>Past Work</h3>
                        </Link>
                    </div>

                    <div className="link-container" onMouseEnter={this.contactHover} onMouseLeave={this.contactLeave}>
                        <Link to="/contact">
                            <img alt="contact" className="zoom" src={this.state.contactImage} />
                            <h3 className={this.state.contactImageHeaderClass}>Contact</h3>
                        </Link>
                    </div>
                    <div className="link-container" onMouseEnter={this.logoHover} onMouseLeave={this.logoLeave}>
                        <a href="https://github.com/Ragepanda" target="_blank" rel="noopener noreferrer">
                            <img alt="github" className="zoom" src={this.state.logoImage} />
                            <h3 className={this.state.logoImageHeaderClass}>Github</h3>
                        </a>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Home;