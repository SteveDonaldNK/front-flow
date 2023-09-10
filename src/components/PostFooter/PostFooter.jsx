import React from 'react'
import './styles.css'
import { Container, Stack, Badge } from 'react-bootstrap'

export default function PostFooter() {
  return (
    <Container id='post-footer' className='mb-4 p-0' fluid>
        <Stack className='tag-container' direction='horizontal' gap={2}>
            <Badge pill bg="secondary">
                React Native
            </Badge>
            <Badge pill bg="secondary">
                React
            </Badge>
            <Badge pill bg="secondary">
                Performance Optimization
            </Badge>
            <Badge pill bg="secondary">
                Android App Development
            </Badge>
            <Badge pill bg="secondary">
                IOS App Development
            </Badge>
        </Stack>
    </Container>
  )
}
