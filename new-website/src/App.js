import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './stylesheets/Main.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <NavigationBar /> 
        <HomePage />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
