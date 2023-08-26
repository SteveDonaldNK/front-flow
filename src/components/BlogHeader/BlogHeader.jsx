import React from 'react'
import { Container } from 'react-bootstrap'
import Line from '../../components/Line/Line'
import './styles.css'

export default function BlogHeader() {
  return (
    <Container fluid className='p-0'>
        <h1>Insights & advice from our team</h1>
        <p>The latest industry news, interviews, technologies and resources.</p>
    </Container>
  )
}
