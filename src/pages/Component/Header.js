import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Links from "./Links";
// import Links from './Link';
const Header = () => {
  return (
    <>
      <div className="header">
        
        <Navbar collapseOnSelect expand="lg">
         
            <Navbar.Brand href="#home" className="logo">
              <h5 className="logo">Zakariye Aden</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end nav-menu">
              <Nav className="ms-auto font">
                <Links href="#Home">Home</Links>
                <Links href="#About">About us</Links>
                <Links href="#Service">Service</Links>
                <Links href="#Experience">Experience</Links>
                <Links href="#Potfolio"> Projects</Links>
                <Links href="#Contact">Contact</Links>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
