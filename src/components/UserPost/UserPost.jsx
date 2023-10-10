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
        <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
          <Button variant="outline-dark" className='rounded-pill tag-btn py-1' >
            Design
          </Button>
          <span className='text-secondary'>4 min read</span>
        </div>
        <Button className='p-1 icon-btn'><BookmarkPlus color={Colors.greyXXL} size={22} /></Button>
      </Stack>
    </Container>
  )
}
