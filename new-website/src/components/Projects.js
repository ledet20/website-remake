import React from 'react';
import '../stylesheets/Projects.css';
import puzzle from '../images/15puzzleG.jpg';
import arcangel from '../images/arcangelG.jpg';
import distrk from '../images/disTrkG.jpg';


export const Projects = () => (
    <div className='projects'>
        <p className='myProjects'> MY LATEST PROJECTS </p> 
        <div className='project'> <img   className='img' src={puzzle}></img></div>
        <div className='project'> <img className='img' src={arcangel}></img></div>
        <div className='project'> <img className='img' src={distrk}></img></div>
        <div className='projectLink'> <a className='link' href='https://github.com/ledet20' target="_blank"> VIEW MORE PROJECTS </a> </div>

    </div>
);