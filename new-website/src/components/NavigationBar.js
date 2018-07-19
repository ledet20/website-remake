import React  from 'react';
 // import { Navbar , Nav, NavItem } from 'react-bootstrap';
import '../stylesheets/Navigation.css';

// bootstrapUtils.addStyle(Navbar, 'custom');

export const NavigationBar = () => {

    return (
    <div>
      <nav className='nav'>
          <a href='#' className='navLink'> LA </a> 
          <a href='#' className='navLink'> ABOUT </a>
          <a href='#' className='navLink'> BLOG </a> 
          <a href='#' className='navLink'> CONTACT </a> 
      </nav>
    </div>
    );
}