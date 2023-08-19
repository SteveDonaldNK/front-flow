import React from 'react'
import { Container, Image, Stack } from 'react-bootstrap'
import './styles.css'
import QuickButton from '../QuickButton/QuickButton'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import Avatar from '../Avatar/Avatar'
import { Dot } from 'react-bootstrap-icons'

export default function PostHeader() {
  return (
    <Container id='post-header' fluid>
        <h1 className='post-title my-4'>Developers we love: Coffee date with Frakie Sullivan</h1>
        <Stack direction='horizontal' className='gap-3' >
          <Avatar size={50} />
          <Stack className='justify-content-center'>
            <h6 className='m-0 fw-semibold'>John Doe</h6>
            <p className='m-0'>16 min read<Dot />Aug 8</p>
          </Stack>
        </Stack>
        {/* <QuickButton /> */}
        <BottomNavBar border/>
    </Container>
  )
}
