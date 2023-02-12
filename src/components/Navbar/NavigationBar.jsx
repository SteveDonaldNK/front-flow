import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import Logo from '../../assets/logo.png';
import './styles.css'

export default function NavigationBar() {
  return (
      <Navbar className='px-5 nav-bar' bg="light" expand="lg">
        <Navbar.Brand href='/' className='d-flex justify-content-center align-items-center gap-2 fw-bold'>
          <img className='logo' src={Logo} alt="Logo" /><span className='logo-label'>Front-flow</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navigation'/>
        <Navbar.Collapse id='navigation'>
          <Nav className='m-auto gap-5'>
            <Nav.Link className='links' href='/'>Home</Nav.Link>
            <NavDropdown className='links' title='Blog' id='dropdown-navigation' >
              <NavDropdown.Item href='/'>Home</NavDropdown.Item>
              <NavDropdown.Item href='/'>Blog</NavDropdown.Item>
              <NavDropdown.Item href='/'>About us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='links' href='/'>About us</Nav.Link>
            <Nav.Link className='links' href='/'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className='nav-bar-btn px-3 py-1.6 white-btn' variant='light'><span>Log in</span></Button>
        <Button className='nav-bar-btn px-3 py-1.6 ms-2' variant='dark'><span>Sign up</span></Button>
      </Navbar>
  )
}
