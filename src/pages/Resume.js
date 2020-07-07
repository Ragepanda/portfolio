import React from "react";
import "./Resume.css"
import { Link } from "react-router-dom";

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            github: "/assets/image/logo.png",
            projects: "/assets/image/settings.png"
        };

        this.activateGithub = this.activateGithub.bind(this);
        this.deactivateGithub = this.deactivateGithub.bind(this);
        this.activateProjects = this.activateProjects.bind(this);
        this.deactivateProjects = this.deactivateProjects.bind(this);
    }

    // Contact *
    // Project *
    // Education *
    // Skills *
    // Work History *

    activateGithub() {
        this.setState({ github: "/assets/image/logo-blue.png" });
    }
    deactivateGithub() {
        this.setState({ github: "/assets/image/logo.png" });
    }

    activateProjects() {
        this.setState({ projects: "/assets/image/settings-blue.png" });
    }
    deactivateProjects() {
        this.setState({ projects: "/assets/image/settings.png" });
    }

    render() {

        return (
            <div className="resume">
                <header>
                    <h1>Jonathan Woltz</h1>
                    <p>Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages with a specialization in the MySQL, Express, React and Node Stack. 
                        Knowledgeable of backend and frontend development requirements.
                        Able to handle any part of the process with ease. Collaborative team player with ecellent technical abilities offering two years of related experience.
                        </p>
                </header>
                <aside>
                    <div className="side-panel" id="contact">
                        <div className="header-underline">
                            <div className="image-wrap">
                                <img alt="contact" className="side-icons" src="/assets/image/contact-us.png" />
                            </div>
                            <h2>Contact</h2>
                        </div>
                        <h3>Address</h3>
                        <p>2109 Glade Valley Lane</p>
                        <p>Morrisville, NC, 27560</p>
                        <h3>Phone</h3>
                        <p>(336) 529 2098</p>
                        <h3>E-Mail</h3>
                        <p>Jwoltz13@gmail.com</p>
                    </div>

                    <div className="side-panel" id="projects">
                        <div className="header-underline">
                            <div className="image-wrap">
                                <img alt="past work" className="side-icons" src="/assets/image/resume/presentation.png" />
                            </div>
                            <h2 id="past-work">Past Work</h2>
                        </div>


                        <div className="project-icons" onMouseEnter={this.activateGithub} onMouseLeave={this.deactivateGithub}>
                            <a href="https://github.com/Ragepanda">
                                <img alt="github" className="zoom" src={this.state.github} />
                                <p>Github</p>
                            </a>
                        </div>

                        <div className="project-icons" onMouseEnter={this.activateProjects} onMouseLeave={this.deactivateProjects}>
                            <Link to="/work">
                                <img alt="projects" className="spin" src={this.state.projects} />
                                <p>Projects</p>
                            </Link>
                        </div>
                    </div>

                    <div className="side-panel" id="relevant-skills">
                        <div className="header-underline">
                            <div className="image-wrap">
                                <img alt="skills" className="side-icons" src="/assets/image/resume/skills.png" />
                            </div>
                            <h2>Skills</h2>
                        </div>
                        <ul>
                            <li>MERN Software Development</li>
                            <li>Search Engine Optimization</li>
                            <li>Responsive & Mobile Friendly Design</li>
                            <li>MySQL & MongoDB Databases</li>
                        </ul>
                    </div>

                    <div className="side-panel" id="education">
                        <div className="header-underline">
                            <div className="image-wrap">
                                <img alt="education" className="side-icons" src="/assets/image/resume/education.png" />
                            </div>
                            <h2>Education</h2>
                        </div>
                        <p className="edu-dates">April 2018 - October 2018</p>
                        <h3>Professional Web Development Training</h3>
                        <p>UNC Coding Bootcomp - Raleigh NC</p>

                        <p className="edu-dates">August 2011 - May 2015</p>
                        <h3>Bachelor of Arts: Computer Science</h3>
                        <p>University of North Carolina - Chapel Hill, NC</p>
                    </div>



                </aside>

                <section>
                    <div className="header-underline">
                        <div className="image-wrap">
                            <img alt="work history" className="side-icons" src="/assets/image/resume/work-history.png" />
                        </div>
                        <h2 id="work-history">Work History</h2>
                    </div>

                    <h3>Full Stack Developer | Feb 2019 - May 2020</h3>
                    <p> Admetrics Pro, Morrisville, NC </p>
                    <ul>
                        <li>
                            Implemented SEO enhancements and Front End
                            updates on two of Admetric Pro's acquired
                            websites which saw 20% increase in traffic within
                            three months of optimization.
                        </li>
                        <li>
                            Took initial concepts and developed project plans
                        </li>
                        <li>
                            Reviewed code, debugged problems and corrected issues
                        </li>
                        <li>
                            Delivered three user-centric full stack websites as project manager that met all business requirements
                        </li>
                        <li>
                            Managed milestones from initial steps through final delivery
                        </li>
                    </ul>

                    <h3>Quality Assurance Automation Engineer | Nov 2015 - Feb 2017</h3>
                    <p> Sensus, Morrsiville, NC </p>
                    <ul>
                        <li>
                            Implemented end-to-end automation for electric meter diagnostics, replacing thousands of manual tests
                        </li>
                        <li>
                            Identified appropriate situations for implementing test automation, accounting for situations where automated testing was counterproductive
                        </li>
                        <li>
                            Validated production deployment changes, providing reports on discovered issues to the team's Senior Engineer
                        </li>
                        <li>
                            Identified and tracked defects with TestTrack and supported developers with responsive testing feedback.
                        </li>
                    </ul>

                    <h3>Cloud Network Colocation Intern</h3>
                    <p>General Electric, Blue Ash, OH</p>
                    <ul>
                        <li>
                            Supported the Network Engineer team to accomplish GE's first Colocation server implementation.
                        </li>
                        <li>
                            Received training on traditional networking technology including but not limited to routing technologies, switching, firewalls, IDS/IPS, proxies, as well as Virtual/Cloud-enabling network technologies.
                        </li>
                        <li>
                            Developed understanding of cloud server architectures, with focus on applicaiton delivery controllers.
                        </li>
                        <li>
                            Provided analysis on automation oportunites for networking elements of Colocation/Cloud Edge design.
                        </li>
                    </ul>

                </section>
            </div >

        )
    }
}

export default Resume;