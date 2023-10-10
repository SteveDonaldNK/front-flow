import React from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Line from '../../components/Line/Line'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './styles.css'

export default function Careers() {
  return (
    <Container id='career-container' className='p-0' fluid>
        <NavigationBar />
        <Row className='px-5 my-5 py-2 mx-0 gy-3'>
            <Col lg={6}>
                <h1 className='career-container-title'>
                    <span>Explore Your Career</span><br />
                    Potential at <span className='text-nowrap fw-normal'>Front-Flow</span>
                </h1>
            </Col>
            <Col lg={6}>
                <p>
                    Front-Flow is dedicated to elevating the art of storytelling in design and development.
                    We prioritize quality content over ads, relying on our community for support.
                    Join us in shaping the future of online publishing!
                </p>
                <Button variant='outline-dark' className='border border-dark border-2 rounded-pill px-4 py-2 mt-5 fw-semibold find-job-btn'>FIND A JOB</Button>
            </Col>
        </Row>
        <Container className='d-flex p-0 justify-content-evenly top-employee-container' fluid>
            <div className='top-employee employee1'>
                <div className='employee-label text-center'>
                    <h5 className='m-0'>ANNA DEAN</h5>
                    <p>React Engineer</p>
                </div>
            </div>
            <div className='top-employee employee2'>
                <div className='employee-label text-center'>
                    <h5 className='m-0'>ANNA DEAN</h5>
                    <p>React Engineer</p>
                </div>
            </div>
            <div className='top-employee employee3'>
                <div className='employee-label text-center'>
                    <h5 className='m-0'>ANNA DEAN</h5>
                    <p>React Engineer</p>
                </div>
            </div>
            <div className='top-employee employee4'>
                <div className='employee-label text-center'>
                    <h5 className='m-0'>ANNA DEAN</h5>
                    <p>React Engineer</p>
                </div>
            </div>
        </Container>
        <Container className='job-listing-container mx-auto w-75' fluid>
            <Stack gap={4} direction='horizontal' className='flex-wrap column-gap-3'>
                <span className='text-nowrap'>Filter by:</span>
                <Form.Select className='ms-2 filter-dropdown'>
                    <option className='d-none'>Location</option>
                    <option>All</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Europe</option>
                </Form.Select>
                <Form.Select className='filter-dropdown'>
                    <option className='d-none'>Location Type</option>
                    <option>All</option>
                    <option>Remote</option>
                    <option>On-site</option>
                    <option>Hybrid</option>
                </Form.Select>
                <Form.Select className='filter-dropdown'>
                    <option className='d-none'>Work Type</option>
                    <option>All</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                </Form.Select>
            </Stack>
            <div className='mt-5 job'>
                <h3>ENGINEERING</h3>
                <hr/>
                <Stack className='align-items-start flex-wrap' direction='horizontal'>
                    <a href='/' className='job-info flex-fill'>
                        <div>
                            <p className='fs-4 job-title'>Senior Backend Engineer</p>
                            <p className='fw-bold d-flex gap-3 mt-2 mb-0 job-options'>
                                <span>REMOTE, AFRICA</span>
                                <span>ENGINEERING</span>
                                <span>FULL-TIME</span>
                                <span>REMOTE</span>
                            </p>
                        </div>
                    </a>
                    <Button variant="dark" className='rounded-0 px-4 py-2'>
                        APPLY
                    </Button>
                </Stack>
            </div>
        </Container>
    </Container>
  )
}
