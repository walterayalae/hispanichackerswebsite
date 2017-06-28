import React from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Navigation extends React.Component {

  render() {

    return (

      <Navbar inverse collapseOnSelect>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="#">Hispanic Hackers</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
         <NavItem eventKey={1} href="#">Join Us!</NavItem>
         <NavItem eventKey={2} href="#">Blog</NavItem>
         <NavItem eventKey={2} href="#">Contact</NavItem>
       </Nav>
     </Navbar>

    );
  }
}
