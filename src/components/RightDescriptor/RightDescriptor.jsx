import React, { useRef, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import SubscriptionBtns from '../SubscriptionBtns/SubscriptionBtns'
import Line from '../Line/Line';
import { Button, Container, OverlayTrigger, Popover, Stack } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import { Colors } from '../../Constants';
import './styles.css'
import { useClickAway } from 'react-use';

export default function RightDescriptor() {

  const popover = (
    <Popover id="follower-popover" className='shadow-sm rounded-1'>
      <Popover.Header>
        <Stack direction='horizontal' gap={3}>
          <Avatar size={32} />
          <p className='fw-semibold fs-5 m-0'>John Doe</p>
        </Stack>
      </Popover.Header>
      <Line color={Colors.grey} />
      <Popover.Body>
        <Stack direction='horizontal' className='justify-content-between'>
          <p className='m-0'>1 Follower</p>
          <Button className='rounded-pill' variant='primary'>Follow</Button>
        </Stack>
      </Popover.Body>
    </Popover>
  )

  const FollowingListItem = () => (
    <li>
      <Stack direction='horizontal' className='justify-content-between'>
        <div className='d-flex gap-3'>
          <Avatar size={22} />
          <span>Lucy doe</span>
        </div>
        <OverlayTrigger trigger='focus' placement='top' overlay={popover} >
          <Button className='icon-btn p-1'>
            <ThreeDots color={Colors.greyXXL} size={22} />
          </Button>
        </OverlayTrigger>
      </Stack>
    </li>
  )

  return (
    <Container className='sticky-container position-sticky p-0' fluid>
        <Avatar size={100} />
        <Stack>
            <p className='mb-1 mt-3 fw-bold fs-5'>Anne Doe</p>
            <p className='m-0 fw-medium text-secondary'>187k Followers</p>
        </Stack>
        <p className='m-0 mt-3 mb-4 text-secondary fw-medium'>Sr. React Native Engineer (React Ntive | React | JS | Node.js) at BasementSports, USA (Remote)</p>
        <SubscriptionBtns />
        <p className='mt-5 fs-5 fw-bold'>Following</p>
        <Container fluid className='p-0 text-secondary'>
          <ul className='p-0'>
            <FollowingListItem />
          </ul>
          <p>See all(190)</p>
        </Container>
        
    </Container>
  )
}
