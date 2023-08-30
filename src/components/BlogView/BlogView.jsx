import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Image, Stack, Card, Collapse, Button} from 'react-bootstrap'
import image from '../../assets/image 1.jpg'
import Avatar from '../../components/Avatar/Avatar'
import BlogCard from '../BlogCard/BlogCard'
import VertLine from '../VertLine/VertLine'
import PagePagination from '../PagePagination/PagePagination'
import Line from '../Line/Line'
import './styles.css'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons'

export default function BlogView() {

  const [visible, setVisible] = useState(false);
  const tabGroupRef = useRef(null);
  const hideTabStyle = 'translate(100%, -50%)';
  const showTabStyle = 'translate(0, -50%)'

  const handleShow = () => {
    const tabStyleObj = tabGroupRef.current.style
    visible ? tabStyleObj.transform = hideTabStyle : tabStyleObj.transform = showTabStyle;
    setVisible(!visible)
  }

  const resetTabStyle = () => {
    const tabStyleObj = tabGroupRef.current.style;
    tabStyleObj.transform = showTabStyle;
  }

  useEffect(() => {
    window.addEventListener('resize', resetTabStyle);
  
    return () => {
      window.removeEventListener('resize', resetTabStyle);
    }
  }, [])
  

  return (
    <Container className='mb-5 p-0' fluid>
        <Row className='m-0'>
            <Col className='p-0' xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
              <Row className='m-0'>
                <Line color={'var(--secondary-color)'} />
                <Container className='p-0 my-4' fluid>
                  <Image className='top-card-image float-start' src={image} />
                    <h3 className='fw-bold'>Will AI replace UX writing?</h3>
                    <p>Concerned with the idea that robots are comming to take your job? Here's what the data says.</p>
                    <Stack className='avatar align-center gap-3' direction='horizontal'>
                      <Avatar size={50} />
                      <div>
                        <strong>Phoenix Baker</strong>
                        <p className='fw-semibold m-0 text-secondary'>19 Jan 2022</p>
                      </div>
                    </Stack>
                </Container>
                <Line color={'var(--secondary-color)'} />
              </Row>
              <Row className='card-row p-0 m-0'>
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                <VertLine />
                <Col className='p-0 py-4'>
                  <BlogCard />
                </Col>
                <Line color={'var(--secondary-color)'} />
              </Row>
              <PagePagination />
            </Col>

            <Col className='p-0' lg={3}>
              <Container ref={tabGroupRef} className='m-0 px-5 tab-container'>
                <Button onClick={handleShow} className='position-absolute tab-btn' >
                  {visible ?
                    <ChevronCompactRight color={'var(--grey-color-xxl)'} size={32} /> :
                    <ChevronCompactLeft color={'var(--grey-color-xxl)'} size={32} />
                  }
                </Button>
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
            </Col>
        </Row>
    </Container>
  )
}
