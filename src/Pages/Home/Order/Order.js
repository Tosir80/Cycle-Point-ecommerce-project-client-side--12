import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Order = () => {
    const {id}=useParams()
    const [data,setData]=useState([])
  const [addToCart, setAddToCart] = useState({});

    const{_id,img,name,price,description}=data
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

 const onBlurHander = (e) => {
          const flied = e.target.name;
          const value = e.target.value;
          const newData = { ...addToCart };
          newData[flied] = value;
          setAddToCart(newData);
        };
    const registerHandler=e=>{
         e.preventDefault();
         const status="Pending"
        const cartData = { id:_id, product: name, img, price , status , ...addToCart}
        console.log(cartData)
       
        
    }
    return (
      <div >
        <Container>
          <Row >
            <Col xs={12} sm={12} md={6} className='py-5'>
              <Card className='my-2 p-2 boder border-danger '>
                <Card.Img
                  variant='top'
                  style={{ width: '100%', height: '300px' }}
                  src={img}
                />
                <Card.Body>
                  <Card.Title>Brand Name: {name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <div className='d-flex justify-content-around'>
                    <h5 className='price'>Price: ${price}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6}>
              <div className='py-5 login'>
                <h3>Please create your an Account</h3>
                <form onSubmit={registerHandler}>
                  <input
                    placeholder='user.email'
                    type='name'
                    onBlur={onBlurHander}
                    name='name'
                  />
                  <input
                    placeholder='user.email'
                    type='email'
                    onBlur={onBlurHander}
                    name='email'
                  />
                  <input
                    placeholder='Address'
                    type='text'
                    name='address'
                    onBlur={onBlurHander}
                  />
                  <input
                    placeholder='Phone No:'
                    type='number'
                    name='number'
                    onBlur={onBlurHander}
                  />

                  <Button className='loginBtn' type='submit'>
                    Add to Cart
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Order;