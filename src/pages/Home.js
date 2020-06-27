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
            logoImage: "/assets/image/logo.png"
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

    resumeHover() { this.setState({ resumeImage: "/assets/image/resume-blue.png" }); }

    resumeLeave() { this.setState({ resumeImage: "/assets/image/resume.png" }); }

    settingsHover() { this.setState({ settingsImage: "/assets/image/settings-blue.png" }); }

    settingsLeave() { this.setState({ settingsImage: "/assets/image/settings.png" }); }

    contactHover() { this.setState({ contactImage: "/assets/image/contact-us-blue.png" }); }

    contactLeave() { this.setState({ contactImage: "/assets/image/contact-us.png" }); }

    logoHover() { this.setState({ logoImage: "/assets/image/logo-blue.png" }); }

    logoLeave() { this.setState({ logoImage: "/assets/image/logo.png" }); }


    render() {

        // Need "who am I and what do I do" headliner
        // "Icon made by Freepik from www.flaticon.com"
        return (
            <div className="content">
                <section>
                    <h1>Need a Web Developer?</h1>
                    <p>Hello! My name is John. I'm a full stack React web developer located in Raleigh, NC. I'm experienced in providing elegant, reactive and mobile-friendy front end solutions, SEO enhancements and sophisticated back end infrastructure. Looking to hire or need a freelancer? Let's have a talk.</p>
                </section>
                <aside>
                    <div onMouseEnter={this.resumeHover} onMouseLeave={this.resumeLeave}>
                        <Link to="/resume">
                            <img className="zoom" id="resume" src={this.state.resumeImage} />
                            <h3>Resume</h3>
                        </Link>
                    </div>

                    <div onMouseEnter={this.settingsHover} onMouseLeave={this.settingsLeave}>
                        <Link to="/work">
                            <img className="spin" src={this.state.settingsImage} />
                            <h3>Work</h3>
                        </Link>
                    </div>

                    <div onMouseEnter={this.contactHover} onMouseLeave={this.contactLeave}>
                        <Link to="/contact">
                            <img className="zoom" src={this.state.contactImage} />
                            <h3>Contact</h3>
                        </Link>
                    </div>
                    <div onMouseEnter={this.logoHover} onMouseLeave={this.logoLeave}>
                        <a href="https://github.com/Ragepanda" target="_blank">
                            <img className="zoom" src={this.state.logoImage} />
                            <h3>Github</h3>
                        </a>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Home;