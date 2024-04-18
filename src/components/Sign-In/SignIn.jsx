import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import Image from '../../assets/image 13.jpg'
import GoogleLogo from '../../assets/google.png'
import { useWindowSize } from 'react-use'
import Line from '../Line/Line'
import './styles.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignIn() {
    const { width } = useWindowSize();
    var direction;

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Invalid email address")
            .required('Email is required'),
            password: Yup.string()
            .min(8, 'Must be at least 8 characters long')
            .required("Password is required")
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

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
                <div className='my-3 divider w-100 d-flex position-relative'>
                    <Line color={'var(--grey-color)'}/> <strong>OR</strong>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label><strong>Email</strong></Form.Label>
                        <div className="input-container">
                            <Form.Control 
                                type='email' 
                                placeholder='Enter your email'
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className='text-danger fw-semibold'><small>{formik.errors.email}</small></p>
                            ) : null}
                        </div>
                        <Form.Label><strong>Password</strong></Form.Label>
                        <div className="input-container">
                            <Form.Control 
                                type='password' 
                                placeholder='Enter your password'
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <p className='text-danger fw-semibold'><small>{formik.errors.password}</small></p>
                            ) : null}
                        </div>
                        <Stack direction={direction} className='form-stack'>
                            <Form.Check.Label>
                                <Form.Check.Input 
                                    className='me-2' 
                                    type='checkbox' 
                                    name='rememberMe'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.rememberMe}
                                />
                                <strong>Remember me for 30 days</strong>
                            </Form.Check.Label>
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
