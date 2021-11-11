import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Spinner from '../../Shared/Spinner/Spinner';

const Services = () => {
    const [services, setServices] = useState([]);
           useEffect(() => {
             fetch('http://localhost:5000/services')
               .then((res) => res.json())
               .then((data) => setServices(data));
           }, [services]);

    return (
      <div>
        <Container>
          <h2 className='text-center py-5'>Our available Products</h2>
          {services.length === 0 ? (
            <div className="text-center"><Spinner></Spinner> </div>
          ) : (
            <Row xs={1} sm={1} md={3}>
              {services?.slice(0, 6).map((service) => (
                <Service key={service._id} service={service}></Service>
              ))}
            </Row>
          )}
        </Container>
      </div>
    );
};

export default Services;