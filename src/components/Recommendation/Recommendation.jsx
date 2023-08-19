import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cards from '../Cards/Cards'
import Line from '../Line/Line'
import image1 from '../../assets/image 1.jpg'
import image2 from '../../assets/image 6.jpg'
import image3 from '../../assets/image 5.jpg'
import image4 from '../../assets/image 7.jpg'
import image5 from '../../assets/image 9.jpg'
import image6 from '../../assets/image 8.jpg'
import image7 from '../../assets/image 10.jpg'
import image8 from '../../assets/image 11.jpg'
import image9 from '../../assets/image 14.jpg'
import user1 from '../../assets/users/user 1.jpg'
import user2 from '../../assets/users/user 2.jpg'
import user3 from '../../assets/users/user 3.jpg'
import user4 from '../../assets/users/user 4.jpg'
import user5 from '../../assets/users/user 5.jpg'
import './styles.css'

export default function Recommendation() {
    const images = [image1, image2, image3, image4]
    const users = [user1, user2, user3, user4, user5]

  return (
    <Container fluid className='p-0'>
        <h4 className='fw-bold mb-4'>Recommendations for you</h4>
        <Row className='w-100 mx-0 gy-4 d-flex justify-content-between' >
            {images.map((image) => (
                <Col lg={6} className="more-post p-0">
                    <Cards height={250} image={image} user={users[1]} />
                </Col>
            ))}
        </Row>
        <Line />
        <div className='w-100 text-left'>
            <Button variant='outline-dark' className='mt-3 px-4 rounded-pill'>See all from John Doe</Button>
        </div>
    </Container>
  )
}
