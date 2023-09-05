import { useWindowSize } from 'react-use';
import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Offcanvas, Stack, Container } from 'react-bootstrap'
import { Logo, logoWhite } from '../../Constants/images';
import { useLocation } from 'react-router-dom';
import './styles.css'

export default function NavigationBar() {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const pathName = useLocation().pathname;
  const bp = 992;
  const logoType = pathName !== '/' ? Logo : (width > bp ? Logo : logoWhite )
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleScroll = () => setScroll(!scroll)

  const MenuBtn = ({path}) => (
    <span className={`toggler navbar-toggler-icon ${path !== '/' && 'dark'}`}></span>
  )
  
  const NavLinks = () => (
    pathName !== '/compose' ?
    <Nav className='m-auto gap-4 text-center'>
      <Nav.Link href='/'><Button className='nav-btn' variant='light'>Homes</Button></Nav.Link>
      <Nav.Link className='nav-btn'>
        <Button className='nav-btn p-0' variant='light'>
          <NavDropdown title='Blog' id='dropdown-navigation'>
            <NavDropdown.Item href='/'>Blog</NavDropdown.Item>
            <NavDropdown.Item href='/'>About us</NavDropdown.Item>
          </NavDropdown>
        </Button>
      </Nav.Link>
      <Nav.Link href='/'><Button className='nav-btn' variant='light'>About us</Button></Nav.Link>
      <Nav.Link href='/'><Button className='nav-btn' variant='light'>Contact us</Button></Nav.Link>
    </Nav> 
    :
    <Nav className='ms-auto' style={{marginRight: '10%'}} fluid>
      <Button>Publish</Button>
    </Nav>
  )
  
  const NavBtn = ({direction, margin}) => (
      <Stack className={margin} direction={direction} gap={3}>
        <a href='/login'><Button className='nav-bar-btn px-3 py-1.6' variant='light'>Log in</Button></a>
        <a href='/signup'><Button className='nav-bar-btn px-3 py-1.6 ' variant='dark'>Sign up</Button></a>
      </Stack>
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
      <Navbar className={`px-5 nav-bar white`} bg="light" expand='lg'>
        <Navbar.Brand href='/' className='d-flex justify-content-center align-items-center gap-2 fw-bold'>
          <img className='logo' src={logoType} alt="Logo" /><span className={`logo-label ${pathName === '/' && 'white'}`}>Front-flow</span>
        </Navbar.Brand>
        <Navbar.Toggle className='border-0' onClick={handleShow}>
          <MenuBtn path={pathName} />
        </Navbar.Toggle>
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
