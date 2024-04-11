import React from "react";
import "./Resume.css";
import { Link } from "react-router-dom";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      github: "/assets/image/logo.png",
      projects: "/assets/image/settings.png",
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
          <p>
            Well-qualified Front End Developer familiar with a specialization in
            React. Knowledgeable of design, planning and Agile methodologies for
            delivering sleek and efficient front end systems. Able to handle any
            part of the process with competence. Collaborative team player with
            excellent technical and leadership abilities offering three years of
            related experience.
          </p>
        </header>
        <aside>
          <div className="side-panel" id="contact">
            <div className="header-underline">
              <div className="image-wrap">
                <img
                  alt="contact"
                  className="side-icons"
                  src="/assets/image/contact-us.png"
                />
              </div>
              <h2>Contact</h2>
            </div>
            <h3>Address</h3>
            <p>3700 Chimney Ridege Place, Apt 003</p>
            <p>Durham, NC, 27713</p>
            <h3>Phone</h3>
            <p>(336) 529 2098</p>
            <h3>E-Mail</h3>
            <p>Jwoltz13@gmail.com</p>
          </div>

          <div className="side-panel" id="projects">
            <div className="header-underline">
              <div className="image-wrap">
                <img
                  alt="past work"
                  className="side-icons"
                  src="/assets/image/resume/presentation.png"
                />
              </div>
              <h2 id="past-work">Past Work</h2>
            </div>

            <div
              className="project-icons"
              onMouseEnter={this.activateGithub}
              onMouseLeave={this.deactivateGithub}
            >
              <a href="https://github.com/Ragepanda">
                <img alt="github" className="zoom" src={this.state.github} />
                <p>Github</p>
              </a>
            </div>

            <div
              className="project-icons"
              onMouseEnter={this.activateProjects}
              onMouseLeave={this.deactivateProjects}
            >
              <Link to="/work">
                <img
                  alt="projects"
                  className="spin"
                  src={this.state.projects}
                />
                <p>Projects</p>
              </Link>
            </div>
          </div>

          <div className="side-panel" id="relevant-skills">
            <div className="header-underline">
              <div className="image-wrap">
                <img
                  alt="skills"
                  className="side-icons"
                  src="/assets/image/resume/skills.png"
                />
              </div>
              <h2>Skills</h2>
            </div>
            <ul>
              <li>TypeScript, React, SASS/LESS</li>
              <li>GraphQL, Redux, RESTful APIs</li>
              <li>Git, Jira, Node.js</li>
              <li>Responsive & Mobile Friendly Design</li>
            </ul>
          </div>

          <div className="side-panel" id="education">
            <div className="header-underline">
              <div className="image-wrap">
                <img
                  alt="education"
                  className="side-icons"
                  src="/assets/image/resume/education.png"
                />
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
              <img
                alt="work history"
                className="side-icons"
                src="/assets/image/resume/work-history.png"
              />
            </div>
            <h2 id="work-history">Work History</h2>
          </div>
          <div className="job-entry">
            <h3>UI Developer | Apr 2022 - Current</h3>
            <p>Cisco Systems - Experis, Morrsiville, NC</p>
            <ul>
              <li>
                Developed reusable components, queries and bugfixes for hardware
                library using HTML, SASS/LESS, TypeScript and React.
              </li>
              <li>
                Reduced load time on key pages by 30% by utilizing lazy loading
                and creating perfectly streamlined requests in GraphQL.
              </li>
              <li>
                Utilized JIRA with Agile Methodology to manage project
                requirements and business objectives.
              </li>
              <li>
                Reformatted over 20 pages on platform to be responsive and
                mobile friendly for users in the field.
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <h3>Front End Web Developer | Nov 2020 - April 2022</h3>
            <p>Syngenta, Morrsiville, NC</p>
            <ul>
              <li>
                Contributed and maintained agronomist platform using HTML, SASS,
                TypeScript, React, Redux and REST.
              </li>
              <li>
                Created react components and tools to analyze high resolution
                satellite imagery from AWS and generate informational graphs via
                Chart.js that could be exported as PDFs and CSVs.
              </li>
              <li>
                Developed unit testing suites with Jest and implemented
                analytics on over 70 interactive components using Segment.
              </li>
              <li>
                Collaborated closely with Product Managers and Designers on
                design drafts as a technical advisor.
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <h3>Full Stack Web Developer | Feb 2019 - May 2020</h3>
            <p> Admetrics Pro, Morrisville, NC </p>
            <ul>
              <li>
                Maintained and contributed to full stack website ad space
                management platform with an HTML, SCSS, TypeScript and React
                Front End and a MySQL/Node Back End.
              </li>
              <li>
                Implemented SEO and react conversions to a dated math and
                english worksheets website acquired by AdMetrics Pro, increasing
                user traffic by 30% within 3 months of improvements.
              </li>
              <li>
                Mentored, code reviewed, and taught React principles to two
                fellow developers unfamiliar with the framework.
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <h3>Quality Assurance Automation Engineer | Nov 2015 - Feb 2017</h3>
            <p> Sensus, Morrsiville, NC </p>
            <ul>
              <li>
                Implemented end-to-end automation for electric meter
                diagnostics, replacing thousands of manual tests
              </li>
              <li>
                Identified appropriate situations for implementing test
                automation, accounting for situations where automated testing
                was counterproductive
              </li>
              <li>
                Validated production deployment changes, providing reports on
                discovered issues to the team's Senior Engineer
              </li>
              <li>
                Identified and tracked defects with TestTrack and supported
                developers with responsive testing feedback.
              </li>
            </ul>
          </div>

          {/* <h3>Cloud Network Colocation Intern</h3>
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
                    </ul> */}
        </section>
      </div>
    );
  }
}

export default Resume;
