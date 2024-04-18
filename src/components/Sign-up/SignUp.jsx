import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import Image from '../../assets/image 13.jpg'
import GoogleLogo from '../../assets/google.png'
import Line from '../Line/Line'
import { useFormik } from 'formik'
import './styles.css'
import * as Yup from 'yup'

export default function SignUp() {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required("Username is required"),
            email: Yup.string()
            .email("Invalid email address")
            .required('Email is required'),
            password: Yup.string()
            .min(8, 'Must be at least 8 characters long')
            .required("Password is required"),
            passwordConfirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], 'Passwords must match')
        }),
        onSubmit: values => {
            console.log(values);
        },
    });
    
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
                <div className='my-3 divider w-100 d-flex position-relative'>
                    <Line color={'var(--grey-color)'} /><strong>OR</strong>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label><strong>Name</strong></Form.Label>
                        <div className="input-container">
                            <Form.Control 
                                type='text' 
                                placeholder='Enter your name' 
                                name='username'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <p className='text-danger fw-semibold'><small>{formik.errors.username}</small></p>
                            ) : null}
                        </div>
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
                        <Form.Label><strong>Confirm password</strong></Form.Label>
                        <div className="input-container">
                            <Form.Control 
                            type='password' 
                            placeholder='Enter your password'
                            name='passwordConfirmation'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordConfirmation}
                            />
                            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                <p className='text-danger fw-semibold'><small>{formik.errors.passwordConfirmation}</small></p>
                            ) : null}
                        </div>
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
