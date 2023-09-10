import React from 'react'
import Avatar from '../Avatar/Avatar'
import { Container } from 'react-bootstrap'
import { useWindowSize } from 'react-use'
import SubscriptionBtns from '../SubscriptionBtns/SubscriptionBtns'

export default function PostOwner() {
  const { width } = useWindowSize();
  const bp = 850;

  return (
    <Container fluid className='p-0'>
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Avatar size={70}/>
        {width <= bp && <SubscriptionBtns />}
      </Container>
      <Container fluid className='p-0 mt-4 d-flex'>
        <Container fluid className='p-0'>
          <h3 className='fw-bold'>Written by John Doe</h3>
          <p>30 followers</p>
          <p className='m-0'>Sr. React Native Engineer (React Ntive | React | JS | Node.js) at BasementSports, USA (Remote)</p>
        </Container>
        {width > bp && <SubscriptionBtns lg/>}
      </Container>
    </Container>
  )
}
