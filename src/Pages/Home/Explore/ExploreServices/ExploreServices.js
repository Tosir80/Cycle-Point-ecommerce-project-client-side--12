import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreServices = () => {
        const [services, setServices] = useState([]);
        useEffect(() => {
          fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
        }, []);

    return (
      <div>
        <Container>
          <h2 className='text-center py-5'>
            Our available Product {services.length}
          </h2>
          <Row xs={2} sm={2} md={3}>
            {services?.map((pd) => (
              <div key={pd._id}>
                <Card className='my-2 p-2 boder border-danger'>
                  <Card.Img
                    variant='top'
                    style={{ width: '100%', height: '200px' }}
                    src={pd.img}
                  />
                  <Card.Body>
                    <Card.Title>{pd.name}</Card.Title>
                    <Card.Text>{pd.description}</Card.Text>
                    <div className='d-flex justify-content-around'>
                      <h5 className='price'>${pd.price}</h5>
                       <Link to={`/order/${pd._id}`}> <Button className="orderBtn" >Order Now</Button></Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default ExploreServices;