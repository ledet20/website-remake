import React, { Component } from 'react';
import { NavigationBar }  from './components/NavigationBar';
import  Main  from './components/Main';


import './stylesheets/Main.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="Main">
        <NavigationBar /> 
        <Main />
      </div>
    );
  }
}

export default App;
