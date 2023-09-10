import React from 'react'
import { Container, Image, Tab, Tabs } from 'react-bootstrap'
import pic from '../../assets/image 1.jpg'
import './styles.css'
import ProfilePostCard from '../ProfilePostCard/ProfilePostCard'

export default function LeftDescriptor() {
  return (
    <Container fluid className='px-5'>
      <Container fluid className='bg-primary mb-5' style={{height: '20vh'}}>
        
      </Container>
      <Container className='px-4' fluid>
        <p className='py-3 fs-1 fw-bold'>Anne Doe</p>
        <Tabs
          defaultActiveKey="home"
          id="left-descriptor-tab"
          className="my-3"
        >
          <Tab className='home-tab' eventKey="home" title="Home">
            <h6 className='fw-bold mb-4'>All Anne Doe's posts</h6>
            <ProfilePostCard />
          </Tab>
          <Tab eventKey="about" title="About">
            Tab content for Profile
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}
