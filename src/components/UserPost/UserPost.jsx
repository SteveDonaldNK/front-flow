import React from 'react'
import { Button, Container, Stack } from 'react-bootstrap'
import { BookmarkPlus, ThreeDots } from 'react-bootstrap-icons'
import { Colors } from '../../Constants'
import './styles.css'

export default function UserPost() {
  return (
    <Container className='p-0' fluid>
      <p className='fw-medium text-secondary'>4 days ago</p>
      <h5 className='userpost-title'>What Qualifies as Public Education, Anyway?</h5>
      <p className='userpost-body'>When you’ve been around as long as I have, one gets all manner of intriguing questions. 
        While I usually respond to such queries in private, some seem likely to be of broader interest. 
        So, in “Ask Rick,” I occasionally take up reader queries. If you’d like to send one along…</p>
      <Stack direction='horizontal' className='justify-content-between mt-5'>
        <span className='text-secondary'>4 min read</span>
        <span>
          <Button className='p-1 icon-btn'><BookmarkPlus color={Colors.greyXXL} size={22} /></Button>
          <Button className='p-1 icon-btn ms-3'><ThreeDots color={Colors.greyXXL} size={22} /></Button>
        </span>
      </Stack>
    </Container>
  )
}
