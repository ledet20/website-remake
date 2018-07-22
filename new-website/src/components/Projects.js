import React from 'react';
import '../stylesheets/Projects.css';
import puzzle from '../images/15puzzleG.jpg';
import arcangel from '../images/arcangelG.jpg';
import distrk from '../images/disTrkG.jpg';


export const Projects = () => (
    <div className='projects'>
        <p className='myProjects'> MY LATEST PROJECTS </p> 
        <div className='project hvrbox'> 
            <img className='img hvrbox-layer_bottom' src={arcangel} />
            <div className="hvrbox-layer_top hvrbox-layer_slidedown">
            <a className='link' href='https://github.com/ledet20/arcangel' target="_blank" >
		        <div className="hvrbox-text"> Web and mobile application that uses the Twitter API to find people who need help during a natural disaster. Esri gis technology used to place the location of where the most help is needed by a users tweet location.</div>
            </a>
	        </div>
        </div>
        <div className='hvrbox project'> 
           <img className='img hvrbox-layer_bottom' src={puzzle} />
            <div className="hvrbox-layer_top hvrbox-layer_slidedown">
            <a className='link' href='https://github.com/ledet20/15-puzzles-game' target="_blank" >
                 <div className="hvrbox-text"> Sliding game puzzle that has four levels of diffuculty, includes top 5 scoreboard and the ability to recieve hints during the duration of the game.</div> 
            </a>
	        </div>
        </div>
        <div className='project hvrbox'> 
            <img className='img hvrbox-layer_bottom' src={distrk} />
            <div className="hvrbox-layer_top hvrbox-layer_slidedown">
              <a className='link' href='https://github.com/ledet20/CodeRED_2017' target="_blank" >
		            <div className="hvrbox-text">Web application tool that would make communication between patients and physicians more effective in regards to automating the patient discharge process.</div>
                </a>
	        </div>
         </div>
        <div className='projectLink'> <a className='link' href='https://github.com/ledet20' target="_blank"> VIEW MORE PROJECTS </a> </div>

    </div>
);



{/* <div class="hvrbox">
	<img src="img/photos/photo1.jpg" alt="Mountains" class="hvrbox-layer_bottom">
	<div class="hvrbox-layer_top hvrbox-layer_slidedown">
		<div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
	</div>
</div> */}