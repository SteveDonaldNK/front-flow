import React from 'react'
import { Button, Container, Form, Stack } from 'react-bootstrap'
import './styles.css'

export default function Newsletter() {
  return (
    <Container id='newsletter-container' className='p-0 vh-100' fluid>
        <form className='h-75 position-relative'>
            <h1 className='position-absolute'>Subscribe to our newsletter</h1>
            <Stack direction='horizontal' className='position-absolute input-stack' gap={3}>
                <Form.Control
                    type="text"
                    className='rounded-pill'
                />
                <Button className='rounded-pill px-4 py-2'>
                    Subscribe
                </Button>
            </Stack>
        </form>
    </Container>
  )
}
