import React from 'react'
import { Col, Container, Row, Image, Stack, Card, Collapse} from 'react-bootstrap'
import image from '../../assets/image 1.jpg'
import Avatar from '../../components/Avatar/Avatar'
import BlogCard from '../BlogCard/BlogCard'
import VertLine from '../VertLine/VertLine'
import './styles.css'

export default function BlogView() {
  return (
    <Container className='mb-5' fluid>
        <Row>
            <Col className='border-bottom border-dark border-2' lg={10}>
              <Row className='top-row py-4 border border-dark border-end-0 border-start-0 border-2'>
                <Container className='p-0' fluid>
                  <Image className='top-card-image float-start' src={image} />
                    <h3 className='fw-bold'>Will AI replace UX writing?</h3>
                    <p className='card-body'>Concerned with the idea that robots are comming to take your job? Here's what the data says.</p>
                    <Stack>
                      <Avatar size={50} />
                    </Stack>
                </Container>
              </Row>
              <Row className='gap-5'>
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                <VertLine />
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
              </Row>
            </Col>

            <Col>
            </Col>
        </Row>
    </Container>
  )
}
