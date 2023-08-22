import React from 'react'
import { useWindowSize } from 'react-use'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Cards from '../Cards/Cards'
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

export default function RecentPosts() {
    const { width } = useWindowSize();
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
    const users = [user1, user2, user3, user4, user5]
    const screen = { md: 1000, sm: 645, xxs: 280, colSize: 4 }
    width < screen.md && (screen.colSize = 6);
    width < screen.sm && (screen.colSize = 12);

    const randomUser = () => (
        Math.floor(Math.random() * users.length)
    )

  return (
    <Container fluid className='recentPosts-container'>
        <h2>Recent Blog Posts</h2>
        <Row className='w-100 mx-0 gx-5 d-flex' >
            {images.map((image, key) => (
                <Col key={key} xs={screen.colSize} className="column">
                    <Cards image={image} user={users[randomUser()]} />
                </Col>
            ))}
        </Row>
        <div className='w-100 text-center mt-5'>
            <Button variant='dark mt-3 more-btn'>Load more...</Button>
        </div>
    </Container>
  )
}
