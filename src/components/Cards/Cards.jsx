import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Dot } from 'react-bootstrap-icons';

export default function Cards({ image, user, height, width }) {
  return (
    <Card className='post-card border-0'>
        <Card.Img height={height} width={width} loading='lazy' variant='top' src={image}></Card.Img>
        <Card.Title>Migrating to Linear 101</Card.Title>
        <Card.Body>Linear helps streamline software projects, sprints, tasks and bug tracking. Here's how to get started.</Card.Body>
        <Card.Text> <Image loading='lazy' src={user} /> Eve Wilkins <Dot /> 18 Jan 2022</Card.Text>
    </Card>
  )
}
