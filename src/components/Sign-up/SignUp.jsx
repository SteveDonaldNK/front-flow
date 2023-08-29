import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import Image from '../../assets/image 13.jpg'
import GoogleLogo from '../../assets/google.png'
import './styles.css'
import Line from '../Line/Line'

export default function SignUp() {
    
  return (
    <Container fluid className='h-100'>
        <Row className='h-100'>
        <Col md={4} lg={4} xl={4} xxl={4} className='px-5 left-col'>
            <Stack direction='vertical' className='h-100 justify-content-center'>
                <a href="/">
                    <img className='logo' src={Logo} alt="" />
                    <span><strong>Front-flow</strong></span>
                </a>
                <h3>Join our community</h3>
                <p>Get regular updates on the latest trends, frameworks, principles, and best practices to help you stay ahead of the curve.</p>
                <Button variant='outline-secondary' className='mt-2 google-auth-btn d-flex justify-content-center gap-2' >
                    <img src={GoogleLogo} alt=''></img><strong>Sign up with Google</strong>
                </Button>
                <div className='divider w-100 d-flex position-relative'>
                    <Line color={'var(--grey-color)'} /><strong>OR</strong>
                </div>
                <Form>
                    <Form.Group>
                    <Form.Label><strong>Name*</strong></Form.Label>
                    <Form.Control type='text' placeholder='Enter your name' required/>
                    <Form.Label><strong>Email*</strong></Form.Label>
                    <Form.Control type='email' placeholder='Enter your email' required/>
                    <Form.Label><strong>Password*</strong></Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' required/>
                    <Form.Label><strong>Confirm password*</strong></Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' required/>
                    <Button variant='dark' type='submit' className='w-100 mt-3'><strong>Sign up</strong></Button>
                    </Form.Group>
                </Form>
                <p className='d-flex w-100 justify-content-center mt-4 gap-2'>Already have and account? <a href="/login">Log in</a></p>
            </Stack>
        </Col>
        <Col md={8} lg={8} xl={8} xxl={8} className='h-100 p-3 right-col'>
            <aside className='right-container h-100'>
                <img src={Image} alt="" />
            </aside>
        </Col>
        </Row>
    </Container>
  )
}
