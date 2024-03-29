import { useWindowSize } from 'react-use';
import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Offcanvas, Stack, Container } from 'react-bootstrap'
import { Logo, logoWhite } from '../../constants/images';
import { useLocation, useNavigate } from 'react-router-dom';
import useScrollListener from '../../hooks/useScrollListener';
import { breakpoints, categories } from '../../constants';
import './styles.css'

export default function NavigationBar() {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const bp = breakpoints.lg;
  const [show, setShow] = useState(false);
  const navbarRef = useRef(null);
  const scroll = useScrollListener();
  const pathName = useLocation().pathname;
  const isScrollingDown = scroll.y > 150 && scroll.y - scroll.lastY > 0;
  const isAtTop = scroll.y === 0;
  const isMobile = width <= bp;
    
  function handleShow() {
    setShow(!show);
  }

  function checkPage() {
    return (isMobile && pathName === '/' && scroll.y === 0)
  }

  useEffect(() => {
  const navbarClass = navbarRef.current.classList;

    if (isScrollingDown) {
      navbarClass.add("hidden-nav-bar", "shadow-sm");
    } else if (isAtTop) {
      navbarClass.remove("shadow-sm");
    } else {
      navbarClass.remove("hidden-nav-bar");
      navbarClass.add("shadow-sm");
    }
    
    if (isMobile) {
      const shouldAddWhiteClass = !isScrollingDown && !isAtTop;
      navbarClass.toggle("white", shouldAddWhiteClass);
    }
  }, [scroll.y, scroll.lastY])

  const MenuBtn = () => (
    <span className={`toggler navbar-toggler-icon  ${!checkPage() && 'dark'}`}></span>
  )

  const NavLinks = ({ width }) => (
    
    <Nav className='mx-auto gap-4 navLinks-container text-center'>
      <Button onClick={() => navigate('/')} className={`nav-btn ${width}`} variant='light'>Home</Button>
      <Button className={`nav-btn p-0 ${width}`} variant='light'>
        <NavDropdown title='Blog' id='dropdown-navigation'>
          <NavDropdown.Item href='/blog'>All topics</NavDropdown.Item>
          {
            categories.map((category, key) => (
              <NavDropdown.Item key={key} href={`/blog?category=${category}`}>{category}</NavDropdown.Item>
            ))
          }
        </NavDropdown>
      </Button>
      <Button onClick={() => navigate('/about')} className={`nav-btn ${width}`} variant='light'>About</Button>
      <Button onClick={() => navigate('/terms-of-service')} className={`nav-btn ${width}`} variant='light'>Terms</Button>
    </Nav> 
  )
  
  const NavBtn = ({direction, margin}) => (
      <Stack className={margin} direction={direction} gap={3}>
        <a href='/login'><Button className='nav-bar-btn px-3 py-1.6' variant='light'>Log in</Button></a>
        <a href='/signup'><Button className='nav-bar-btn px-3 py-1.6 ' variant='dark'>Sign up</Button></a>
      </Stack>
  )

  return (
      <Navbar ref={navbarRef} className={`px-5 nav-bar ${checkPage() && 'home-bar'}`} expand='lg'>
        <Navbar.Brand href='/' className='d-flex justify-content-center align-items-center gap-2 fw-bold'>
          {
            checkPage() ? <img className='logo' src={logoWhite} alt="Logo" /> :
            <img className='logo' src={Logo} alt="Logo" />
          }
          <span className={`logo-label ${checkPage() ? 'white' : 'dark'}`}>Front-flow</span>
        </Navbar.Brand>
        <Navbar.Toggle className='border-0' onClick={handleShow}>
          <MenuBtn />
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
