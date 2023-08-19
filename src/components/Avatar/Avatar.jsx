import React from 'react'
import user from '../../assets/users/user 1.jpg'
import './styles.css'
import { Image } from 'react-bootstrap'

export default function Avatar({ size }) {
  return (
    <Image className='post-owner' height={size} width={size} src={user} roundedCircle />
  )
}
