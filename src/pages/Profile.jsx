import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import ProfileDescription from '../components/ProfileDescription/ProfileDescription'

export default function Profile() {
  return (
    <>
      <NavigationBar />
      <Container id='profile-container' fluid>
        <ProfileDescription />
      </Container>
    </>
  )
}
