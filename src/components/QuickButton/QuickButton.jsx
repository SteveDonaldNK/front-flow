import React from 'react'
import { Stack, Button } from 'react-bootstrap'
import { PlayCircle, BoxArrowUp } from 'react-bootstrap-icons'

export default function QuickButton() {
  return (
    <Stack direction='horizontal' gap={2} className='my-4'>
        <Button variant='outline-secondary' className='rounded-pill px-3 py-2 d-flex align-items-center gap-2'>
            <PlayCircle size={22} />
            <span>Listen</span>
        </Button>
        <Button variant='outline-secondary' className='rounded-pill px-3 py-2 d-flex align-items-center gap-2'>
            <BoxArrowUp size={22} />
            <span>Share</span>
        </Button>
    </Stack>
  )
}
