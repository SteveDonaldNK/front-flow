import React from 'react'
import { Badge, Button, Container, Stack, Accordion, Row, Col } from 'react-bootstrap'
import logo from '../../assets/logo-white.png'
import './styles.css'
import { useWindowSize } from 'react-use'

const links = [{
  heading: "Resources",
  link1: {
    title: "Blog",
    badge: false
  },
  link2: {
    title: "Newsletter",
    badge: true
  },
  link3: {
    title: "Resources",
    badge: false
  },
}, {
  heading: "Company",
  link1: {
    title: "About us",
    badge: false,
  },
  link2: {
    title:"",
    badge: false,
  },
  link3: {
    title: "Contact",
    badge: false,
  }
}, {
  heading: "Social",
  link1: {
    title: "Facebook",
    badge: false,
  },
  link2: {
    title: "LinkedIn",
    badge: false,
  },
  link3: {
    title: "Github",
    badge: false,
  }
}, {
  heading: "Legal",
  link1: {
    title: "Terms",
    badge: false,
  },
  link2: {
    title: "Privacy",
    badge: false,
  },
  link3: {
    title: "Cookies",
    badge: false,
  }
}]

const FullFooterLinks = () => (
  links.map(({heading, link1, link2, link3}, key) => (
    <ul key={key}>
      <li><strong>{heading}</strong></li>
      <li><a href="">{link1.title} {link1.badge && <Badge pill>New</Badge>}</a></li>
      <li><a href="">{link2.title} {link2.badge && <Badge pill>New</Badge>}</a></li>
      <li><a href="">{link3.title} {link3.badge && <Badge pill>New</Badge>}</a></li>
    </ul>
  ))
);

const AccordionLinks = ({size}) => (
  <Accordion className='footer-accordion d-flex'>
      <Row className="gy-3">
      {
        links.map((link, key) => (
          <Col key={key} xs={size} sm={6} md={6}>
            <Accordion.Item eventKey={key} >
              <Accordion.Header>{link.heading}</Accordion.Header>
              <Accordion.Body >
                <ul>
                  <li><a href="">{link.link1}</a></li>
                  <li><a href="">{link.link2} {link.badge && <Badge pill>New</Badge>}</a></li>
                  <li><a href="">{link.link3}</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        ))
      }
      </Row>
  </Accordion>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {width} = useWindowSize();
  let size = 6;
  let textDir = 'horizontal' 
  let btnDir = 'horizontal';
  width <= 440 && (size = 12);
  width <= 500 && (textDir = 'vertical');
  width <= 300 && (btnDir = 'vertical');

  return (
    <Container className='mb-3 text-light footer' fluid>
      <Container className='text-center' fluid>
        <h1>Let's get started on something great</h1>
        <h5 className='mt-3'>Join over 4,000+ startups already growing with Front-flow.</h5>
        <Stack direction={btnDir} gap={3} className='justify-content-center mt-5'>
          <Button variant='dark' className='border-light'>Chat to us</Button>
          <Button variant='dark' className='border-light'>Get started</Button>
        </Stack>
      </Container>
      <Container fluid className='footer-link-container d-flex justify-content-between'>
        {width > 600 ? <FullFooterLinks /> : <AccordionLinks size={size} />}
      </Container>
      <Stack className='px-5 mt-5 copy-right text-center' direction={textDir}>
        <a href="/"><img className='logo me-2' src={logo} alt="Logo" /><span>Front-flow</span></a>
        <p className='copy-right-text ms-auto mb-0'>&copy; {currentYear} Front-flow. All rights reserved</p> 
      </Stack>
    </Container>
  )
}
