import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import { AboutMe } from './components/AboutMe';
import './stylesheets/Main.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <NavigationBar /> 
        <HomePage />
        <AboutMe />
      </div>
    );
  }
}

export default App;
