import React from "react";

import {Link} from 'react-router-dom'

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { Navbar,Container,Nav } from "react-bootstrap";

// Here, we display our Navbar
export default function Navbare()  {
  return (
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="about" style={{alignItems:'end'}}>

            <strong>Atri Ahmed</strong>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="about"><strong>About</strong></Nav.Link>
            <Nav.Link as={Link} to="skills"><strong>Skills & Experience</strong></Nav.Link>
            <Nav.Link as={Link} to="work"><strong>Work</strong></Nav.Link>
            <Nav.Link as={Link} to="contact"><strong>Contact</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
