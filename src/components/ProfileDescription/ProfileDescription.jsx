import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RightDescriptor from '../RightDescriptor/RightDescriptor';
import LeftDescriptor from '../LeftDescriptor/LeftDescriptor';
import './styles.css';

export default function ProfileDescription() {
  return (
    <Container fluid>
        <Row className='description-row'>
            <Col className='px-5' lg={8}>
                <LeftDescriptor />
            </Col>
            <Col className='p-5 border-start position-relative' lg={4}>
                <RightDescriptor />
            </Col>
        </Row>
    </Container>
  )
}
