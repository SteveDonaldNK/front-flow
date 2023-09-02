import React from 'react'
import image from '../../assets/image 1.jpg'
import { Card, Stack } from 'react-bootstrap'
import Avatar from '../Avatar/Avatar'

export default function BlogCard() {
  return (
    <Card className='border-0'>
        <Card.Img className='card-image' src={image} />
        <Card.Title>Migrating to linear 101</Card.Title>
        <Card.Body>Linear helps streamline software projects, sprints, tasks and bug tracking. Here's how to get started</Card.Body>
        <Stack className='avatar mt-4 align-center gap-3' direction='horizontal'>
          <Avatar size={50} />
          <div>
            <strong>Phoenix Baker</strong>
            <p className='fw-semibold m-0 text-secondary'>19 Jan 2022</p>
          </div>
        </Stack>
    </Card>
  )
}
