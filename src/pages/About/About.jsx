import React from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import whiteLogo from '../../assets/logo-white.png'
import Line from '../../components/Line/Line'
import { Colors } from '../../Constants/colors'
import videoBackground from '../../assets/about.mp4'
import { ArrowRight } from 'react-bootstrap-icons'
import './styles.css'

export default function About() {
  return (
    <Container className='about-container p-0' fluid>
        <Row className='m-0 h-100' >
            <Col className='video-container position-relative p-0' lg={6}>
                    <a href="/" className='logo overlay-logo invisible position-absolute end-0 top-0 m-4 d-flex align-items-center gap-2'>
                        <Image height={25} src={whiteLogo} alt='logo' />
                        <span className='text-white'>Front-flow</span>
                    </a>
                <div className='overlay position-absolute top-0 left-0 h-100 w-100 bg-dark'>
                </div>
                <video autoPlay muted loop className='w-100'>
                    <source src={videoBackground} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
                
            </Col>
            <Col className='p-0 d-flex flex-column justify-content-between' lg={6}>
                <div className='p-4'>
                    <a href="/" className='top-logo logo mb-3 ms-auto d-flex align-items-center gap-2 '>
                        <Image height={25} src={logo} alt='logo' />
                        <span>Front-flow</span>
                    </a>
                    <h1 className='about-heading'>Everyone has a story to tell</h1>
                    <p className='about-text'>Medium is a home for human stories and ideas. 
                        Here, anyone can share insightful perspectives, useful knowledge, 
                        and life wisdom with the world—without building a mailing list or a following first. 
                        The internet is noisy and chaotic; Medium is quiet yet full of insight. 
                        It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                    </p>
                </div>
                <div>
                    <Line color={Colors.greyXL} />
                    <a href="/blog" className='story-link d-flex justify-content-between align-items-center w-100 px-4'>
                        <span>Read Stories</span>
                        <ArrowRight size={60} />
                    </a>
                    <Line color={Colors.greyXL} />
                    <a href="/compose" className='story-link d-flex justify-content-between align-items-center w-100 px-4'>
                        <span>Write your story</span>
                        <ArrowRight size={60} />
                    </a>
                    <Line color={Colors.greyXL} />
                    <div className='p-4 d-flex align-items-center justify-content-between'>
                        <a href="/" className='logo d-flex align-items-center gap-2 '>
                            <Image height={25} src={logo} alt='logo' />
                            <span>Front-flow</span>
                        </a>
                        <Stack className='gap-2' direction='horizontal'>
                            <a className='bottom-links' href="/">About</a>
                            <a className='bottom-links' href="/blog">Blog</a>
                            <a className='bottom-links' href="/contact">Contact</a>
                        </Stack>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
