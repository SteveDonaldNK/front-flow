import React from 'react'
import Avatar from '../Avatar/Avatar'
import { PersonCheck } from 'react-bootstrap-icons';
import SubscriptionBtns from '../SubscriptionBtns/SubscriptionBtns'
import { Badge, Container, Stack } from 'react-bootstrap';

export default function RightDescriptor() {
  return (
    <Container className='position-sticky top-0 p-0' fluid>
        <Avatar size={100} />
        <Stack>
            <p className='mb-1 mt-3 fw-bold fs-5'>Anne Doe</p>
            <p className='m-0 fw-medium text-secondary'>187k Followers</p>
        </Stack>
        <Stack direction='horizontal' className='align-items-end mt-4 gap-3'>
            <PersonCheck size={28} />
            <span className='text-secondary fw-medium'>Member since May 2022</span>
        </Stack>
        <p className='m-0 mt-3 mb-4 text-secondary fw-medium'>Sr. React Native Engineer (React Ntive | React | JS | Node.js) at BasementSports, USA (Remote)</p>
        <SubscriptionBtns />
        <p className='mt-5 fw-bold'>Popular topics from Anne</p>
        <Stack direction='horizontal' className='gap-2 fs-5 flex-wrap'>
          <Badge className='py-2 px-4' pill>Health</Badge>
          <Badge className='py-2 px-4' pill>Psychology</Badge>
          <Badge className='py-2 px-4' pill>Technology</Badge>
          <Badge className='py-2 px-4' pill>Nature</Badge>
          <Badge className='py-2 px-4' pill>Space</Badge>
        </Stack>
    </Container>
  )
}
