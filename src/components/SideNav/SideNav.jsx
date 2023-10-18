import React from 'react'
import { Container } from 'react-bootstrap'
import './styles.css'

export default function SideNav() {
  return (
    <Container className='m-0 px-5 tab-container'>
      <ul className='tab-group my-3'>
        <li className='tab active'>View all</li>
        <li className='tab'>Design</li>
        <li className='tab'>Product</li>
        <li className='tab'>Software Engineering</li>
        <li className='tab'>Customer Success</li>
        <li className='tab'>Leadership</li>
        <li className='tab'>Management</li>
      </ul>
    </Container>
  )
}