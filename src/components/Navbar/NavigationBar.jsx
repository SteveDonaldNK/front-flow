import React, { useRef, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Offcanvas, Stack } from 'react-bootstrap'
import Logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';
import './styles.css'
import { useWindowSize } from 'react-use';

const MenuBtn = () => (
  <span className='toggler navbar-toggler-icon'></span>
)

const NavLinks = () => (
  <Nav className='m-auto gap-4 text-center'>
    <Nav.Link className='links' href='/'>Home</Nav.Link>
    <NavDropdown className='links' title='Blog' id='dropdown-navigation' >
      <NavDropdown.Item href='/'>Home</NavDropdown.Item>
      <NavDropdown.Item href='/'>Blog</NavDropdown.Item>
      <NavDropdown.Item href='/'>About us</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link className='links' href='/'>About us</Nav.Link>
    <Nav.Link className='links' href='/'>Contact us</Nav.Link>
  </Nav>
)

const NavBtn = ({direction, margin}) => (
    <Stack className={margin} direction={direction} gap={3}>
      <Button className='nav-bar-btn px-3 py-1.6 white-btn ' variant='light'><span>Log in</span></Button>
      <Button className='nav-bar-btn px-3 py-1.6 ' variant='dark'><span>Sign up</span></Button>
    </Stack>
)

export default function NavigationBar() {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const bp = 991;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Navbar className='px-5 nav-bar' bg="light" expand="lg">
        <Navbar.Brand href='/' className='d-flex justify-content-center align-items-center gap-2 fw-bold'>
          <img className='logo' src={width > 990 ? Logo : logoWhite} alt="Logo" /><span className='logo-label'>Front-flow</span>
        </Navbar.Brand>
        <Navbar.Toggle className='border-0' onClick={handleShow}><MenuBtn  /></Navbar.Toggle>
        { width > bp && <NavLinks /> }
        { width > bp &&  <NavBtn direction='horizontal' />}
        <Offcanvas show={show} onHide={handleClose} placement="end" responsive="lg" >
          <Offcanvas.Header className='justify-content-center' closeButton />
          <Offcanvas.Body>
            { width <= bp && <NavLinks /> }
            { width <= bp && <NavBtn direction='vertical' margin='mt-4' /> }
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
  )
}
