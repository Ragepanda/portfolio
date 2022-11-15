import React from "react";
import "./Projects.css"
import Project from "../components/Project";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[
                {
                    title: "Runeterra Nexus", 
                    description: "React/Node/Express/MySQL app made for drafting, managing and viewing decks in the game known as Legends of Runeterra.", 
                    url:"https://github.com/Ragepanda/runterra-deck-list", 
                    github:"https://github.com/Ragepanda/runterra-deck-list",
                    image: "/assets/image/projects/runeterra.jpg"
                },
                {
                    title: "Bitcoin-Sama",
                    description: "Bitcoinsama is a React/Node/MySQL/Express application that displays market data for the top 20 crypto currencies, aggregates crypto news, display price charts and calculate exchange rates.",
                    url: "https://github.com/Ragepanda/bit-cafe",
                    github: "https://github.com/Ragepanda/bit-cafe",
                    image: "/assets/image/projects/bitcoin.jpg"
                },
                {
                    title: "The Drinksly",
                    description: "The Drinksly is a responsive and mobile friendly React/Node front end application that allows users to search for popular alcoholic drink recipes.",
                    url: "https://github.com/Ragepanda/the-drinksly",
                    github: "https://github.com/Ragepanda/the-drinksly",
                    image: "/assets/image/projects/drinksly.jpg"
                },
                {
                    title: "Hangman",
                    description: "This is a Dark Souls themed hangman game that utilizes CSS/Bootstrap for a cleanly positioned UI and JQuery for input captures to make for a smooth, responsive game.",
                    url: "https://ragepanda.github.io/hangman/index.html",
                    github: "https://github.com/Ragepanda/hangman-game",
                    image: "/assets/image/projects/hangman.jpg"
                },
                {
                    title: "BonR",
                    description: "This is a JS/JQuery/HTML/CSS app that helps people locate and adopt local pets. Just select a pet type you'd like to find, enter your zip, then give pets .",
                    url: "https://ragepanda.github.io/Project-1/index.html",
                    github: "https://github.com/Ragepanda/Project-1",
                    image: "/assets/image/projects/bonr.jpg"
                },
                {
                    title: "NY Times Scraper",
                    description: "An application made in a coding bootcamp using Node.js, Express, MongoDB/Mongoose and Cheerio that scrapes headlines from the NY Times home page. You can save, comment or wipe away the articles you pull.",
                    url: "https://woltz-scraper.herokuapp.com/",
                    github: "https://github.com/Ragepanda/NY-Times-Article-Scraper",
                    image: "/assets/image/projects/scraper.jpg"
                },
                {
                    title: "D&D Triva",
                    description: "A javascript/jquery application made while in a coding bootcamp that uses timers, DOM manipulation and a Giphy API to create a D&D themed triva game.",
                    url: "https://ragepanda.github.io/TriviaGame/",
                    github: "https://github.com/Ragepanda/TriviaGame",
                    image: "/assets/image/projects/dnd.jpg"
                },
                {
                    title: "Badlands RPG",
                    description: "This is a small, very simple RPG made using HTML, CSS, JQuery and JS while attending a coding bootcamp. You can pick a character, challene another and start attacking. Picking your fights unwisely will result in a loss.",
                    url: "https://ragepanda.github.io/week-4-game/",
                    github: "https://github.com/Ragepanda/week-4-game",
                    image: "/assets/image/projects/badlands.jpg"
                },
                {
                    title: "Giphy Generator",
                    description: "This application uses Jquery to generate buttons in addition to the already supplied ones. The buttons make calls to Giphy to supply the page with 10 gifs matching the keyword.",
                    url: "https://ragepanda.github.io/giphyGenerator/",
                    github: "https://github.com/Ragepanda/giphyGenerator",
                    image: "/assets/image/projects/giphy.jpg"
                }
                
            ]
  
        };
        this.renderProjects = this.renderProjects.bind(this);
      }

    renderProjects(){
        const listItems = this.state.projects.map((project, index)=>{
           return <Project project={project} key={index}/> 
        })
        
        return listItems;
    }

    render() {

        return (
            <div className="work">
                <h1>Previous Work</h1>
                <section className="projects">
                    {this.renderProjects()}
                </section>
            </div>
        )
    }
}

export default Projects;