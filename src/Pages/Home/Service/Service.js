import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const{_id,img,name,price,description}=service
    return (
      <div >
        <Card className="my-2 p-2  border-danger imgscale" >
          <Card.Img variant='top' style={{width:"100%", height:"200px"}} src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <div className="d-flex justify-content-around">
                <h5 className="price">${price}</h5>
               <Link to={`/order/${_id}`}> <Button className="orderBtn" >Order Now</Button></Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Service;