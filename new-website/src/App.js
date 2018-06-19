import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import Main from './stylesheets/Main.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <NavigationBar /> 
        <HomePage />
      </div>
    );
  }
}

export default App;
