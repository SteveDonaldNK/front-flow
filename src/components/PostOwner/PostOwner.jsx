import React from 'react'
import Avatar from '../Avatar/Avatar'
import { Button, Container, Stack } from 'react-bootstrap'
import { EnvelopePlus } from 'react-bootstrap-icons'

export default function PostOwner() {
  return (
    <Container fluid className='p-0'>
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Avatar size={70}/>
      </Container>
      <Container fluid className='p-0 mt-4 d-flex'>
        <Container fluid className='p-0'>
          <h3 className='fw-bold'>Written by John Doe</h3>
          <p>30 followers</p>
          <p className='m-0'>Sr. React Native Engineer (React Ntive | React | JS | Node.js) at BasementSports, USA (Remote)</p>
        </Container>
        <Stack direction='horizontal' gap={2} className='justify-content-start align-items-start'>
          <Button className='rounded-pill py-2 px-4'>Follow</Button>
          <Button className='rounded-circle p-2'><EnvelopePlus size={22} /></Button>
        </Stack>
      </Container>
    </Container>
  )
}
