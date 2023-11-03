import React from 'react'
import { Africa, America, Australia, AustraliaFlag, Cameroon, Europe, Germany, Mexico, Nigeria, Switzerland, USA } from '../../constants/images'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Footer from '../../components/Footer/Footer'
import './styles.css'

export default function Contact() {
  const locations = [
    {
      name: 'Africa',
      phoneNumber: '+1 (877) 718-2617',
      flags: [Cameroon, Nigeria],
      map: Africa,
      address: ['Cameroon, Yaounde', 'Nigeria, Lagos']
    }, {
      name: 'America',
      phoneNumber: '+1 (877) 718-2617',
      flags: [USA, Mexico],
      map: America,
      address: ['USA, C.A, Los Angeles', 'Mexico, Mexico City']
    }, {
      name: 'Australia',
      phoneNumber: '+1 (877) 718-2617',
      flags: [AustraliaFlag],
      map: Australia,
      address: ['Australia, Carlton VIC']
    }, {
      name: 'Europe',
      phoneNumber: '+1 (877) 718-2617',
      flags: [Switzerland, Germany],
      map: Europe,
      address: ['Switzerland, Zurich', 'Germany, Berlin']
    }
  ]

  return (
    <>
      <NavigationBar/>
      <Container id='contact-container' className='mt-5 px-5' fluid>
        <div>
          <h1 className='fw-bold'>Contact us</h1>
          <p>According to region</p>
        </div>
        <Row className='mt-5'>
          {
            locations.map((location, index) => (
              <Col classn key={index} lg={3} md={3} sm={6} xs={6}>
                <div className='d-flex flex-column gap-2 contact-data-container'>
                  <Stack className='address-stack' direction='horizontal' gap={2}>
                    {
                      location.flags.map((flag, key) => (
                        <img key={key} className='flag' src={flag} alt="flag" />
                      ))
                    }
                  </Stack>
                  <p className='location fw-bold fs-'>{location.name}</p>
                  <p className='phone'>{location.phoneNumber}</p>
                  <img className='map my-3' src={location.map} alt="map" />
                  {
                    location.address.map((ad, key) => (
                      <p key={key} className='address'>{ad}</p>
                    ))
                  }
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
      <section id='footer-section'>
        <Footer />
      </section>
    </>
  )
}
