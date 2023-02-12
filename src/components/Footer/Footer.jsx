import React from 'react'
import { Badge, Button, Container, Stack } from 'react-bootstrap'
import logo from '../../assets/logo-white.png'
import './styles.css'

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <Container className='mb-3 text-light footer' fluid>
      <Container className='text-center' fluid>
        <h1>Let's get started on something great</h1>
        <h5 className='mt-3'>Join over 4,000+ startups already growing with Front-flow.</h5>
        <Stack direction='horizontal' gap={3} className='justify-content-center mt-5'>
          <Button variant='dark' className='border-light'>Chat to us</Button>
          <Button variant='dark' className='border-light'>Get started</Button>
        </Stack>
      </Container>
      <Container fluid className='footer-link-container d-flex justify-content-between'>
        <ul>
          <li>Resources</li>
          <li><a href="">Blog</a></li>
          <li><a href="">Newsletter<Badge pill>New</Badge></a></li>
          <li><a href="">Resources</a></li>
        </ul>
        <ul>
          <li>Company</li>
          <li><a href="">About us</a></li>
          <li><a href="">Newsletter</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <ul>
          <li>Social</li>
          <li><a href="">Facebook</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">GitHub</a></li>
        </ul>
        <ul>
          <li>Legal</li>
          <li><a href="">Terms</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Cookies</a></li>
        </ul>
      </Container>
      <Stack className='px-5 mt-5 copy-right' direction='horizontal'>
        <a href="/"><img className='logo me-2' src={logo} alt="Logo" /><span>Front-flow</span></a>
        <p className='ms-auto'>&copy; {currentYear} Front-flow. All rights reserved</p> 
      </Stack>
    </Container>
  )
}
