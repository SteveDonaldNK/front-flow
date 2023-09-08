import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cards from '../Cards/Cards'
import Line from '../Line/Line'
import image1 from '../../assets/image 1.jpg'
import image2 from '../../assets/image 6.jpg'
import image3 from '../../assets/image 5.jpg'
import image4 from '../../assets/image 7.jpg'
import user1 from '../../assets/users/user 1.jpg'
import user2 from '../../assets/users/user 2.jpg'
import user3 from '../../assets/users/user 3.jpg'
import user4 from '../../assets/users/user 4.jpg'
import user5 from '../../assets/users/user 5.jpg'
import './styles.css'

export default function MorePosts() {
    const images = [image1, image2, image3, image4]
    const users = [user1, user2, user3, user4, user5]
    
  return (
    <Container fluid className='p-0'>
        <h4 className='fw-bold mb-4'>More from John Doe</h4>
        <Row className='more-post-row w-100 mx-0 gy-4 d-flex justify-content-between' >
            {images.map((image, key) => (
                <Col key={key} lg={6} className="more-post-col p-0">
                    <Cards height={350} image={image} user={users[1]} />
                </Col>
            ))}
        </Row>
        <Line mt={3} mb={1.5} color={'var(--grey-color)'}/>
        <div className='w-100 text-left'>
            <Button variant='outline-dark' className='more-post-btn px-4 rounded-pill'>See all from John Doe</Button>
        </div>
    </Container>
  )
}
