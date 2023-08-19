import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import Image from '../../assets/image 13.jpg'
import GoogleLogo from '../../assets/google.png'
import './styles.css'
import { useWindowSize } from 'react-use'

export default function SignIn() {
    const { width } = useWindowSize();
    var direction;

    (width <= 1200 && width > 850) || (width <= 400) ? (direction = 'vertical') : direction = 'horizontal';

  return (
    <Container fluid className='h-100'>
        <Row className='h-100'>
        <Col md={4} lg={4} xl={4} xxl={4} className='px-5 left-col'>
            <Stack direction='vertical' className='h-100 justify-content-center'>
                <a href="/">
                    <img className='logo' src={Logo} alt="" />
                    <span><strong>Front-flow</strong></span>
                </a>
                <h3>Happy To See You Again</h3>
                <p>Welcome Back, Please enter Your details.</p>
                <Button variant='outline-secondary' className='mt-2 google-auth-btn d-flex justify-content-center gap-2' >
                    <img src={GoogleLogo} alt=''></img><strong>Login with Google</strong>
                </Button>
                <div className='divider w-100 d-flex position-relative'>
                    <hr /><strong>OR</strong>
                </div>
                <Form>
                    <Form.Group>
                    <Form.Label><strong>Email*</strong></Form.Label>
                    <Form.Control type='email' placeholder='Enter your email' required/>
                    <Form.Label><strong>Password*</strong></Form.Label>
                    <Form.Control type='password' placeholder='Enter your password' required/>
                    <Stack direction={direction} className='form-stack'>
                        <div>
                            <Form.Check.Input type='checkbox' />
                            <Form.Check.Label className='ms-2'><strong>Remember me for 30 days</strong></Form.Check.Label>
                        </div>
                        <a href="" className='ms-auto'><strong>Forgot password</strong></a>
                    </Stack>
                    <Button variant='dark' type='submit' className='w-100 mt-3'><strong>Login</strong></Button>
                    </Form.Group>
                </Form>
                <p className='d-flex w-100 justify-content-center mt-4 gap-2'>Don't have an account? <a href="/signup">Sign up</a></p>
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
