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
            Front-End Developer with 6+ years of experience building responsive web applications using React, TypeScript, and GraphQL.
            Skilled in performance optimization, data visualization, and mobile compatibility. Expert in transforming complex workflows
            into clean, user-friendly interfaces.
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
            <p>1800 E 38th St</p>
            <p>Savannah, GA, 31404</p>
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
              <li>SQL, Node.js, Express</li>
              <li>Responsive & Mobile Friendly Design</li>
              <li>Tailwind & Next.js</li>
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
            <h3>Bachelor Degree: Computer Science</h3>
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
            <h3>Software Developer I | Apr 2025 - Current</h3>
            <h4>Department of Homeland Security - INTEGRITYOne Partners, Reston, VA</h4>
            <p>Lead Front-End Developer for the HSI Digital Records Management System, driving performance improvements and
              modernizing the evidence file storage platform.</p>
            <ul>
              <li>
                Engineer React components with the Material UI and Syncfusion component libraries with Redux state management.
              </li>
              <li>
                Utilize GraphQL to craft and modify queries
              </li>
              <li>
                Lead a full mobile compatibility conversion of platform
              </li>
              <li>
                Use state management optimizations to reduce re-rendering and improve load times.
              </li>
            </ul>
          </div>
          <div className="job-entry">
            <h3>UI Developer | Apr 2022 - April 2024</h3>
            <h4>Cisco Systems - Experis, Morrsiville, NC</h4>
            <p>Developed and optimized UI components for Cisco's internal IT testing library, enabling engineers to replicate real-world
              device scenarios efficiently.
            </p>
            <ul>
              <li>
                Developed components, queries, and bug fixes using HTML, SASS/CSS, TypeScript, React, and GraphQL.
              </li>
              <li>
                Reduced load time on key pages by 30% by utilizing lazy loading and optimizing GraphQL API requests.
              </li>
              <li>
                Utilized Cisco's in-house UI component library and contributed customizations to it.
              </li>
              <li>
                Reformatted over 20 pages on platform to be responsive and mobile friendly for users in the field.
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <h3>Front End Web Developer | Nov 2020 - April 2022</h3>
            <h4>Syngenta, Morrsiville, NC</h4>
            <p>Delivered interactive mapping and analytics tools for Syngenta’s Farmshots platform, enabling growers to visualize crop health
              trends from satellite imagery.</p>
            <ul>
              <li>
                Contributed to Farmshots platform using HTML, LESS/CSS, TypeScript, React, Redux, Ant Design and RESTful APIs.
              </li>
              <li>
                Created maps with Mapbox that allowed users to draw zones around farmland and layer crop-health heat maps on them.
              </li>
              <li>
                Generated multiple types of data visualizations via Chart.js that could be exported as PDFs and CSVs.
              </li>
              <li>
                Developed automated unit testing suites with Jest and utilized Jenkins to run them.
              </li>
              <li>
                Implemented analytics on all interactive components using Segment, enabling product managers to track engagement.
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <h3>Full Stack Web Developer | Feb 2019 - May 2020</h3>
            <h4> Admetrics Pro, Morrisville, NC </h4>
            <p>Engineered full-stack features for an ad revenue analytics platform and modernized multiple consumer-facing websites.</p>
            <ul>
              <li>
                Managed the front-end codebase of the ad platform using HTML, SCSS, TypeScript, and React.
              </li>
              <li>
                Maintained back end of the ad platform with MySQL, Node.js and REST APIs
              </li>
              <li>
                Implemented SEO and React conversions to worksheets website, increasing user traffic by 30% within 3 months.
              </li>
              <li>
                Created a web scraper tool with Puppeteer to ingest large volumes of SEO data and compile it into CSVs.
              </li>
            </ul>
          </div>

          {/* <div className="job-entry">
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
          </div> */}

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
