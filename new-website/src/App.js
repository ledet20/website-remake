import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import puzzle from "./images/15puzzleG.jpg";
import arcangel from "./images/arcangelG.jpg";
import distrk from "./images/disTrkG.jpg";
import './stylesheets/Main.css';

class App extends Component {
   projectList = [
    {
      id: 1,
      img: arcangel,
      link: "https://github.com/ledet20/arcangel",
      description:
        "Web and mobile application that uses the Twitter API to find people who need help during a natural disaster. Esri gis technology used to place the location of where the most help is needed by a users tweet location."
    },
    {
      id: 2,
      img: puzzle,
      link: "https://github.com/ledet20/15-puzzles-game",
      description:
        "Sliding game puzzle that has four levels of diffuculty, includes top 5 scoreboard and the ability to recieve hints during the duration of the game."
    },
    {
      id: 3,
      img: distrk,
      link: "https://github.com/ledet20/CodeRED_2017",
      description:
        "Web application tool that would make communication between patients and physicians more effective in regards to automating the patient discharge process."
    }
  ];

  state = {
    projectList: this.projectList,
  }
  render() {
    return (
      <div className="Main">
        <NavigationBar /> 
        <HomePage />
        <AboutMe />
        <Projects  projects={this.state.projectList} />
        <Contact />
      </div>
    );
  }
}

export default App;
