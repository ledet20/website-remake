import React from 'react';
import profile from '../images/newled.jpg'
import '../stylesheets/aboutMe.css';

export const AboutMe = () => (
    <div className='border'>
    <div className='image'>
        <img src={profile} alt="profile" height='300px'   width='300px' className="profile" />
    </div>
    <div className='aboutMe'> 
        <p className="intro"> Third-year Computer Science undergraduate student at Texas A&amp;M University with an interest in full stack engineering.</p>
    </div>
    </div>
);