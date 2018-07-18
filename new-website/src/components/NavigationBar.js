import React  from 'react';
 // import { Navbar , Nav, NavItem } from 'react-bootstrap';
import '../stylesheets/Navigation.css';

// bootstrapUtils.addStyle(Navbar, 'custom');

export const NavigationBar = () => {

    return (
    <div>
      <nav className='nav'>
          <a href='#'> LA </a> 
          <a href='#'> ABOUT </a>
          <a href='#'> BLOG </a> 
          <a href='#'> CONTACT </a> 
      </nav>
    </div>
    );
}

{/* <Navbar  bsStyle="custom" fluid inverse>
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
</Navbar>  */}