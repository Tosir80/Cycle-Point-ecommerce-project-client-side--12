import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import extra from '../../../img/extraimg.jpg'
import club from '../../../img/reder.png'
const ExtraSection = () => {
    return (
      <div>
        <Container>
          <h1 className='py-5 text-center fw-bold' style={{ color: '#0F044E' }}>
            The best bike service in your city
          </h1>
          <Row className='d-flex align-items-center '>
            <Col xs={12} md={6}>
              <p>
                Welcome to CyclePoint! We’re a bike shop, a family and a team of
                riders. And we have extensive experience in organizing all sorts
                of races, including road racing and off-road racing, both on
                circuits and open courses, and track racing. Feel free to
                contact us!
              </p>
              <Button className='loginBtn'>Read More about Us</Button>
            </Col>
            <Col xs={12} md={6}>
              <img className='img-fluid' src={extra}></img>
            </Col>
          </Row>
          <Row>
            <Col className='py-5 mx-auto text-center'>
              <img className='mx-auto' src={club} alt='' />
              <form className='d-md-flex'>
                <input type='text' className=' mt-3 form-control ' />
                <Button className='googleBtn mt-3'>
                  Subscribe for Newsletter
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default ExtraSection;