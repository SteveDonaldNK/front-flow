import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import { Container } from 'react-bootstrap'
import ProfileDescription from '../../components/ProfileDescription/ProfileDescription'
import Footer from '../../components/Footer/Footer'

export default function Profile() {
  return (
    <>
      <NavigationBar />
      <Container id='profile-container' fluid>
        <ProfileDescription />
      </Container>
      <section id="footer-section" className='mt-5'>
        <Footer />
      </section>
    </>
  )
}
