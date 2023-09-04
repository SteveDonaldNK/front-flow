import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row, Stack, Card, Button, Spinner} from 'react-bootstrap'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons';
import image from '../../assets/image 1.jpg';
import Avatar from '../../components/Avatar/Avatar';
import BlogCard from '../BlogCard/BlogCard';
import VertLine from '../VertLine/VertLine';
import Line from '../Line/Line';
import { useClickAway, useWindowSize } from 'react-use';
import './styles.css';

// Define breakpoint values for screen width
const breakpoints = {
  md: 992,
  sm: 778,
};

export default function BlogView() {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize();
  const paneRef = useRef(null);

  const SidePane = () => (
    <Container ref={paneRef} className={`side-pane ${visible ? 'visible' : ''}`}>
      <Button onClick={handleShow} className='position-absolute pane-btn'>
        {visible ? (
          <ChevronCompactRight color={'var(--grey-color-xxl)'} size={32} />
        ) : (
          <ChevronCompactLeft color={'var(--grey-color-xxl)'} size={32} />
        )}
      </Button>
      <SideNav />
    </Container>
  );

  const SideNav = () => (
    <Container className='m-0 px-5 tab-container'>
      <ul className='tab-group'>
        <li className='tab active'>View all</li>
        <li className='tab'>Design</li>
        <li className='tab'>Product</li>
        <li className='tab'>Software Engineering</li>
        <li className='tab'>Customer Success</li>
        <li className='tab'>Leadership</li>
        <li className='tab'>Management</li>
      </ul>
    </Container>
  );

  const handleShow = () => {
    setVisible(!visible)
  }


  // close pane and reset postion
  const resetPanePosition = () => {
    const paneStyle = paneRef.current.style;
    paneStyle.transform =  'translate(100%, -50%)';
    setVisible(false)
  }

  // close or open the side pane
  const handlePane = () => {
    const paneStyle = paneRef.current.style;
    paneStyle.transform = visible ? 'translate(0, -50%)' : 'translate(100%, -50%)';
  }

  useClickAway(paneRef, () => {
    setVisible(false)
  })

  // when width changes, simply close the pane while making sure its position is reset
  useEffect(() => {
    width <= breakpoints.md && resetPanePosition(); 

  }, [width])
 
  // handle the pane at width <= 992 only since it is not rendered at width > 992 (paneRef is null/undefined) 
  useEffect(() => {
    width <= breakpoints.md && handlePane(); 

  }, [visible])
  
  return (
    <Container className='mb-5 p-0' fluid>
        <Row className='m-0'>
            <Col className='p-0 blog-row' xxl={9} xl={9} lg={9} >
              <Row className='m-0'>
                <Line color={'var(--secondary-color)'} />
                <Container className='p-0 my-4' fluid>
                  <Card className='top-card border-0'>
                    <Card.Img className='top-card-image' src={image} />
                    <div>
                      <Card.Title>Will AI replace UX writing?</Card.Title>
                      <Card.Body>Concerned with the idea that robots are comming to take your job? Here's what the data says.</Card.Body>
                      <Stack className='avatar mt-4 align-center gap-3' direction='horizontal'>
                        <Avatar size={50} />
                        <div>
                          <strong>Phoenix Baker</strong>
                          <p className='fw-semibold m-0 text-secondary'>19 Jan 2022</p>
                        </div>
                      </Stack>
                    </div>
                  </Card>
                </Container>
                <Line color={'var(--secondary-color)'} />
              </Row>
              <Row className='card-row p-0 m-0'>
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                {
                  width > breakpoints.sm ? <VertLine /> :
                  <Line color={'var(--secondary-color)'} />
                }
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                <Line color={'var(--secondary-color)'} />
              </Row>
              <div className='mt-4 w-100 text-center'>
                <Spinner variant='dark' />
              </div>
            </Col>

            <Col className='p-0 position-relative' lg={3}>
              {
                width > breakpoints.md ? <SideNav /> :
                <SidePane />
              }
            </Col>
        </Row>
    </Container>
  )
}
