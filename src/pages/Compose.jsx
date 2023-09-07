import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Editor from '../components/Editor/Editor'
import { Container } from 'react-bootstrap'

export default function Compose() {
  return (
    <>
      <NavigationBar />
      <Container className='compose-container' fluid>
          <Editor />
      </Container>
    </>
  )
}
