import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Bookmark, BookmarkPlus, BoxArrowUp, Chat, Heart, PlayCircle, ThreeDots } from 'react-bootstrap-icons'
import './styles.css'
import { useWindowSize } from 'react-use'

export default function BottomNavBar({ border }) {
  const { width } = useWindowSize();
  const bp = 576;

  return (
    <Container id='bottom-navbar' className={`my-4 ${border && 'border'}`}>
        <Stack direction='horizontal' className='justify-content-between'>
            <Stack direction='horizontal' gap={5}>
                <Heart className='icon-btn' size={20} />
                <Chat className='icon-btn' size={20} />
            </Stack>
            <Stack direction='horizontal' gap={5}>
                <BookmarkPlus className='icon-btn' size={20} />
                {
                  width > bp ? <>
                    <PlayCircle className='icon-btn' size={20} />
                    <BoxArrowUp className='icon-btn' size={20} />
                  </> :
                  <ThreeDots className='icon-btn' size={20}/>
                }
            </Stack>
        </Stack>
    </Container>
  )
}
