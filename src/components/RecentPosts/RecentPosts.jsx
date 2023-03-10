import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
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
import { useWindowSize } from 'react-use'

const Dot = () => {
    return (
        <span className='dot'></span>
    )
}

export default function RecentPosts() {
    const { width } = useWindowSize();
    const screen = { md: 1000, sm: 645, xxs: 280, colSize: 4 }
    width < screen.md && (screen.colSize = 6);
    width < screen.sm && (screen.colSize = 12);

  return (
    <Container fluid className='recentPosts-container'>
        <h2>Recent Blog Posts</h2>
        <Row className='w-100 mx-0 gx-5 d-flex' >
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image1}></Card.Img>
                    <Card.Title>Migrating to Linear 101</Card.Title>
                    <Card.Body>Linear helps streamline software projects, sprints, tasks and bug tracking. Here's how to get started.</Card.Body>
                    <Card.Text> <img src={user1} alt="" /> Eve Wilkins <Dot /> 18 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image2}></Card.Img>
                    <Card.Title>Building your API Stack</Card.Title>
                    <Card.Body>The rise of RESTful APIs has been met by a rise in tools for creating, testing and managing them.</Card.Body>
                    <Card.Text> <img src={user2} alt="" /> Eve Wilkins <Dot /> 18 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image3}></Card.Img>
                    <Card.Title>Bill Walsh Leadership Lessons</Card.Title>
                    <Card.Body>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty</Card.Body>
                    <Card.Text> <img src={user3} alt="" /> Eve Wilkins <Dot /> 19 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image4}></Card.Img>
                    <Card.Title>PM mental models</Card.Title>
                    <Card.Body>Mental models are simple expressions of complex processes or relationships.</Card.Body>
                    <Card.Text> <img src={user3} alt="" /> Eve Wilkins <Dot /> 18 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image5}></Card.Img>
                    <Card.Title>What is Wireframingk</Card.Title>
                    <Card.Body>Introduction to Wireframing and its Principles. Learn from the best in the industry.</Card.Body>
                    <Card.Text> <img src={user5} alt="" /> Eve Wilkins <Dot /> 19 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image6}></Card.Img>
                    <Card.Title>How collaboration makes us better designers</Card.Title>
                    <Card.Body>Collaboration can make our teams stronger, and our individual designs better.</Card.Body>
                    <Card.Text> <img src={user4} alt="" /> Eve Wilkins <Dot /> 18 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image7}></Card.Img>
                    <Card.Title>Migrating to Linear 101</Card.Title>
                    <Card.Body>Linear helps streamline software projects, sprints, tasks and bug tracking. Here's how to get started.</Card.Body>
                    <Card.Text> <img src={user1} alt="" /> Eve Wilkins <Dot /> 19 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image8}></Card.Img>
                    <Card.Title>Our top 10 Javascript frameworks to use</Card.Title>
                    <Card.Body>Javascript frameworks make development easy with extensive features and functionalities.</Card.Body>
                    <Card.Text> <img src={user2} alt="" /> Eve Wilkins <Dot /> 18 Jan 2022</Card.Text>
                </Card>
            </Col>
            <Col xs={screen.colSize} className="column">
                <Card className='post-card'>
                    <Card.Img variant='top' src={image9}></Card.Img>
                    <Card.Title>Podcast: Creating a better CX Community</Card.Title>
                    <Card.Body>Starting a community doesn't need to be complicated, but how do you get started?</Card.Body>
                    <Card.Text> <img src={user5} alt="" /> Eve Wilkins <Dot /> 19 Jan 2022</Card.Text>
                </Card>
            </Col>
        </Row>
        <div className='w-100 text-center mt-5'>
            <Button variant='dark mt-3 more-btn'>Load more...</Button>
        </div>
    </Container>
  )
}
