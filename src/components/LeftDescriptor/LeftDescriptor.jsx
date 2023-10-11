import React from 'react'
import { Button, Container, Stack, Tab, Tabs } from 'react-bootstrap'
import UserPost from '../UserPost/UserPost'
import { Dot, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons'
import './styles.css'
import { Colors, breakpoints } from '../../constants'
import SubscriptionBtns from '../SubscriptionBtns/SubscriptionBtns'
import { useWindowSize } from 'react-use'

export default function LeftDescriptor() {
  const { width } = useWindowSize();

  return (
    <Container className='p-0' fluid>
      <Container className='p-0' fluid>
        <Stack direction='horizontal' className='justify-content-between'>
          <p className='py-3 fs-1 fw-bold'>Anne Doe</p>
          {width <= breakpoints.lg && <SubscriptionBtns />}
        </Stack>
        <Tabs
          defaultActiveKey="home"
          id="left-descriptor-tab"
          className="my-3"
        >
          <Tab className='home-tab mt-4' eventKey="home" title="Home">
            <UserPost />
          </Tab>
          <Tab className='about-tab mt-4' eventKey="about" title="About">
            <span className='followers-count'>22K Followers</span>
            <Dot className='mx-2' size={12} />
            <span className='following-count'>192 Following</span>
            <p className='my-4'>Connect with Anne Doe</p>
            <Stack direction='horizontal' className='gap-5'>
              <a href='#'><Twitter color={Colors.secondary} size={30} /></a>
              <a href='#'><Facebook color={Colors.secondary} size={30} /></a>
              <a href='#'><Linkedin color={Colors.secondary} size={30} /></a>
            </Stack>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}
