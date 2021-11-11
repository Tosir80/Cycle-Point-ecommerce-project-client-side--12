import React, { useState } from 'react';
import { Col, Row,  } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const AddProduct = () => {
     const {user}=useAuth()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
    fetch('http://localhost:5000/addproduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        if (data.acknowledged) {
          toast('Product Added Successfully !!');
        }
      });
      reset()
  }
    return (
      <div>
        <Row>
          <Col>
            <ToastContainer />
            <div className='review'>
              <h3 className='review-title'>Add your Product</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Product Name" {...register('name')} />
                <input type="text" placeholder="Product description" {...register('description')} />
                <input type="text" placeholder="Product Img Url " {...register('img')} />
                <input type="text" placeholder="Product price " {...register('price')} />
                <input className='reviewBtn' type='submit' value='Add Product' />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default AddProduct;