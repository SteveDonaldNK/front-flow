import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Bookmark, BookmarkPlus, BoxArrowUp, Chat, Heart, PlayCircle } from 'react-bootstrap-icons'
import './styles.css'

export default function BottomNavBar({ border }) {
  return (
    <Container id='bottom-navbar' className={`my-4 ${border && 'border'}`}>
        <Stack direction='horizontal' className='justify-content-between'>
            <Stack direction='horizontal' gap={5}>
                <Heart className='icon-btn' size={20} />
                <Chat className='icon-btn' size={20} />
            </Stack>
            <Stack direction='horizontal' gap={5}>
                <BookmarkPlus className='icon-btn' size={20} />
                <PlayCircle className='icon-btn' size={20} />
                <BoxArrowUp className='icon-btn' size={20} />
            </Stack>
        </Stack>
    </Container>
  )
}
