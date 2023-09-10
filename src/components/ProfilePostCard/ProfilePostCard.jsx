import React from 'react'
import pic from '../../assets/image 1.jpg'
import { Button, Card } from 'react-bootstrap'

export default function ProfilePostCard() {
  return (
    <Card className='border-0 gap-5 flex-row-reverse'>
        <Card.Img className='rounded-0' variant="top" height={250} src={pic} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  )
}
