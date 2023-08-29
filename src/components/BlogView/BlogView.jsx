import React from 'react'
import { Col, Container, Row, Image, Stack, Card, Collapse} from 'react-bootstrap'
import image from '../../assets/image 1.jpg'
import Avatar from '../../components/Avatar/Avatar'
import BlogCard from '../BlogCard/BlogCard'
import VertLine from '../VertLine/VertLine'
import PagePagination from '../PagePagination/PagePagination'
import Line from '../Line/Line'
import './styles.css'

export default function BlogView() {
  return (
    <Container className='mb-5 p-0' fluid>
        <Row className='m-0'>
            <Col className='p-0' lg={9}>
              <Row className='m-0'>
                <Line color={'var(--secondary-color)'} />
                <Container className='p-0 my-4' fluid>
                  <Image className='top-card-image float-start' src={image} />
                    <h3 className='fw-bold'>Will AI replace UX writing?</h3>
                    <p>Concerned with the idea that robots are comming to take your job? Here's what the data says.</p>
                    <Stack className='avatar'>
                      <Avatar size={50} />
                    </Stack>
                </Container>
                <Line color={'var(--secondary-color)'} />
              </Row>
              <Row className='card-row p-0 m-0'>
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                <VertLine />
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                <Line color={'var(--secondary-color)'} />
              </Row>
              <PagePagination />
            </Col>

            <Col className='p-0' lg={3}>
              <Container className='m-0 px-5'>
                <ul className='tab-group'>
                  <li className='tab active'>View all</li>
                  <li className='tab'>Design</li>
                  <li className='tab'>Product</li>
                  <li className='tab'>Software Engineering</li>
                  <li className='tab'>Customer Success</li>
                  <li className='tab'>Leadership</li>
                  <li className='tab'>Management</li>
                </ul>
              </Container>
            </Col>
        </Row>
    </Container>
  )
}
