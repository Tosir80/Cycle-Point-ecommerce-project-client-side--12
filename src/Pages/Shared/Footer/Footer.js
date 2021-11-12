import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import payment from '../../../img/payment.png'
const Footer = () => {
    return (
      <div className='footerBg py-5 mt-2'>
        <Container>
          <Row className="d-flex align-items-center">
            <Col xs={12} md={6}>
              <p>
                &copy; 2021 <Link to='/' className="footerBrand"> Cycle Point </Link> All Rights Reserved
              </p>
            </Col>
            <Col xs={12} md={6}>
            <span>Allow payment base on</span> <img className="img-fluid" src={payment} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;