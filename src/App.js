import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/work">
          <Projects />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
