import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { Col, Container, Row } from 'react-bootstrap'
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
