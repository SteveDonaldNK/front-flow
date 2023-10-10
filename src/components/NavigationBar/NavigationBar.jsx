import { useScroll, useWindowSize } from 'react-use';
import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Offcanvas, Stack, Container } from 'react-bootstrap'
import { Logo, logoWhite } from '../../Constants/images';
import { useLocation } from 'react-router-dom';
import './styles.css'

export default function NavigationBar() {
  const { width } = useWindowSize();
  const ref = useRef(null);
  const {x, y} = useScroll(ref)
  const [show, setShow] = useState(false);
  const [navBarStyle, setNavBarStyle] = useState({
    logo: Logo,
    bg: 'white'
  });
  
  const pathName = useLocation().pathname;
  const bp = 992;
    
  const handleShow = () => setShow(!show);

  const MenuBtn = ({path}) => (
    <span className={`toggler navbar-toggler-icon ${path !== '/' && 'dark'}`}></span>
  )

  useEffect(() => {
    if(pathName === '/') {
      width <= bp ?
      setNavBarStyle({
        bg: '',
        logo: logoWhite
      }) :
      setNavBarStyle({
        logo: Logo,
        bg: 'white'
      })
    }
  }, [width, y])

  const NavLinks = ({ width }) => (
    pathName !== '/compose' ?
    <Nav ref={ref} className='mx-auto gap-4 navLinks-container text-center'>
      {console.log(x,y)}
      <Button className={`nav-btn ${width}`} variant='light'>Home</Button>
      <Button className={`nav-btn p-0 ${width}`} variant='light'>
        <NavDropdown title='Blog' id='dropdown-navigation'>
          <NavDropdown.Item href='/'>Blog</NavDropdown.Item>
          <NavDropdown.Item href='/'>Link</NavDropdown.Item>
        </NavDropdown>
      </Button>
      <Button className={`nav-btn ${width}`} variant='light'>Link</Button>
      <Button className={`nav-btn ${width}`} variant='light'>Link</Button>
    </Nav> 
    :
    <Nav className='ms-auto' style={{marginRight: '10%'}}>
      <Button>Publish</Button>
    </Nav>
  )
  
  const NavBtn = ({direction, margin}) => (
      <Stack className={margin} direction={direction} gap={3}>
        <a href='/login'><Button className='nav-bar-btn px-3 py-1.6' variant='light'>Log in</Button></a>
        <a href='/signup'><Button className='nav-bar-btn px-3 py-1.6 ' variant='dark'>Sign up</Button></a>
      </Stack>
  )

  return (
      <Navbar className={`px-5 nav-bar ${navBarStyle.bg}`} expand='lg'>
        <Navbar.Brand href='/' className='d-flex justify-content-center align-items-center gap-2 fw-bold'>
          <img className='logo' src={navBarStyle.logo} alt="Logo" /><span className={`logo-label ${pathName === '/' && 'white'}`}>Front-flow</span>
        </Navbar.Brand>
        <Navbar.Toggle className='border-0' onClick={handleShow}>
          <MenuBtn path={pathName} />
        </Navbar.Toggle>
        { width > bp && <NavLinks /> }
        { width > bp &&  <NavBtn direction='horizontal' />}
        <Offcanvas show={show} onHide={handleShow} placement="end" responsive="lg" >
          <Offcanvas.Header className='justify-content-center' closeButton />
          <Offcanvas.Body>
            { width <= bp && <NavLinks width='w-100' /> }
            { width <= bp && <NavBtn direction='vertical' margin='mt-4' /> }
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
  )
}
