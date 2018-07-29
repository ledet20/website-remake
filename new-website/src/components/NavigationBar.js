import React  from 'react';
import '../stylesheets/Navigation.css';
import { Link } from 'react-router-dom';


export const NavigationBar = () => {

    return (
    <div>
      <nav className='nav'>
          <a><Link to='/' className='navLink'> LA </Link> </a> 
          <a><Link to='/about' className='navLink'>ABOUT </Link></a>
          <a><Link to='/projects' className='navLink'>PROJECTS</Link></a>
          <a><Link to='/blog' className='navLink'> BLOG </Link></a> 
          <a><Link to='/contact' className='navLink'> CONTACT </Link></a> 
      </nav>
    </div>
    );
}