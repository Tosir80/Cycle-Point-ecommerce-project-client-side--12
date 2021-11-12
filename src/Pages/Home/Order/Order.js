
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Order = () => {
    const {id}=useParams()
    const [product,setProduct]=useState([])
  const [addToCart, setAddToCart] = useState({});
  const { user, isLoading } = useAuth();

    const { _id, img, name, price, description } = product;
    useEffect(()=>{
        fetch(`https://peaceful-harbor-44338.herokuapp.com/order/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
    },[])

 const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
        const date= new Date()
        const datee=date.toLocaleDateString()
    const onSubmit = (data) => {
      const status = 'Pending';
      const cartData = {
        id: _id,
        product: name,
        img,
        price,
        status,
        ...data
      };
      
      fetch('https://peaceful-harbor-44338.herokuapp.com/order', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            swal(
              'Product Added Successfully!',
              `ProductId: ${data.insertedId}`,
              'success'
            );
          }
        });
      reset()
    };
    return (
      <div>
        <Container>
          <Row>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} {...register("name")} />
                    <input defaultValue={user?.email} {...register("email")} />
                    <input defaultValue={datee} {...register("date")} /> 
                    <input placeholder="Address" {...register("address")} /> 
                    <input type="number" placeholder="Phone No" {...register("phone")} /> 
                    <input className="loginBtn" value="Add to Cart" type="submit" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Order;