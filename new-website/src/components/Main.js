import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutMe } from './AboutMe';
import { Contact  } from './Contact';
import { HomePage  } from './HomePage';
import { Projects} from './Projects';
import { Blog } from './Blog';
import puzzle from "../images/15puzzleG.jpg";
import arcangel from "../images/arcangelG.jpg";
import distrk from "../images/disTrkG.jpg";


class Main extends Component {
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

    render () {
        return (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/projects' component={() => <Projects projects={this.state.projectList} />}/>
            <Route path='/about' component={AboutMe}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </main>
        )
    }
};

export default Main;