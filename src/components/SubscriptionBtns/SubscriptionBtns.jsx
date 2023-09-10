import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { EnvelopePlus } from 'react-bootstrap-icons'

export default function SubscriptionBtns({lg}) {
  return (
    <Stack direction='horizontal' gap={2} className={`justify-content-start align-items-${lg ? 'start' : 'center'}`}>
        <Button variant='outline-primary' className='rounded-pill py-2 px-4 fw-semibold'>Follow</Button>
        <Button className='rounded-circle p-2'><EnvelopePlus height={24} width={24} /></Button>
    </Stack>
  )
}
