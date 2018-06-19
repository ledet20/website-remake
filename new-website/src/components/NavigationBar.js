import React  from 'react';
import { Navbar , Nav, NavItem } from 'react-bootstrap';
import Navigation from '../stylesheets/Navigation.css';

export const NavigationBar = () => {

    return (
    <Navbar fluid inverse>
   <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">LA</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#" className="nav">
      ABOUT
    </NavItem>
    <NavItem eventKey={2} href="#" className="nav">
      BLOG
    </NavItem>
    <NavItem eventKey={3} href="#" className="nav">
      CONTACT
    </NavItem>
    
   </Nav> 
  </Navbar> 
    );
}