import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RightDescriptor from '../RightDescriptor/RightDescriptor';
import LeftDescriptor from '../LeftDescriptor/LeftDescriptor';
import './styles.css';
import { useWindowSize } from 'react-use';
import { breakpoints } from '../../constants';

export default function ProfileDescription() {
  const { width } = useWindowSize()

  return (
    <Container fluid>
        <Row className='description-row'>
            <Col className='px-5' lg={7}>
                <LeftDescriptor />
            </Col>
            <Col className={`p-5 position-relative ${width >= breakpoints.lg && 'border-start'}`} lg={5}>
                <RightDescriptor />
            </Col>
        </Row>
    </Container>
  )
}
