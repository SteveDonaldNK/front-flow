import React from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import image from '../../assets/image 4.jpg'
import './styles.css'

export default function PostBanner() {
  return (
    <Container id='post-banner' fluid>
        <Image className='banner-img' src={image} height={452} width={700} />
        <caption className='my-4 ps-4'>Frankie sullivan is an important partner at bold & Sullivan who is making her mark in modern design.
        We chatted to her about work, process, what she's working on, and internationally small.
        </caption>
    </Container>
  )
}
