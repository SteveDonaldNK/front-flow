import React from 'react'
import image from '../../assets/image 3.jpg'
import { Card, Stack } from 'react-bootstrap'
import Avatar from '../Avatar/Avatar'
import './styles.css'

export default function BlogCard() {
  return (
    <Card className='border-0'>
        <Card.Img className='card-image' src={image} />
        <Card.Title>Migrating to linear 101</Card.Title>
        <Card.Body>Linear helps streamline software projects, sprints, tasks and bug tracking. Here's how to get started</Card.Body>
        <Stack>
            <Avatar size={50} />
        </Stack>
    </Card>
  )
}
