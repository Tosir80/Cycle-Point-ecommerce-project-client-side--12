import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner'
const ManageAllOrder = () => {
const [allOrder,setAllOrder]=useState([]) 
const {isLoading ,admin} =useAuth()
useEffect(()=>{
    fetch('https://peaceful-harbor-44338.herokuapp.com/allorder')
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
},[allOrder])
const updateHandler=(id)=>{
    fetch(`https://peaceful-harbor-44338.herokuapp.com/allorder/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          toast('Order Shipped Done');
        }
      });
}

const deleteHandler = (id) => {
  const confirm = window.confirm('Are want remove product from your Store?');
  if (!confirm) {
    return;
  }
  fetch(`https://peaceful-harbor-44338.herokuapp.com/deleteOrder/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount == 1) {
        toast('Deleted Successfully !!');
      }
    });
};
  


    return (
      <div>
        {allOrder.length===0? (
          <div className='text-center mt-3'>
            <Spinner animation='border' variant='primary' />
            {/* <Spinner></Spinner> */}
          </div>
        ) : (
          <div>
            <ToastContainer />
            <Row xs={1} md={3}>
              {allOrder.map((pd) => (
                <Col key={pd._id}>
                  <div>
                    <Card className='my-2 p-2  border-danger imgscale'>
                      <Card.Img
                        variant='top'
                        style={{ width: '100%', height: '200px' }}
                        src={pd.img}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h4>Product: {pd.product}</h4>
                        </Card.Title>
                        <Card.Text>Price: {pd.price}</Card.Text>
                        <Card.Text>Address: {pd.address}</Card.Text>
                        <Card.Text>Phone: {pd.phone}</Card.Text>
                        <div className='d-flex '>
                          <h5 className='price'>${pd.price}</h5>
                        </div>
                        <div className='d-flex justify-content-around'>
                          {pd.status === 'Pending' ? (
                            <Button
                              className='btn btn-danger'
                              onClick={() => updateHandler(pd._id)}
                            >
                              {pd.status}
                            </Button>
                          ) : (
                            <Button
                              className='btn btn-success'
                              onClick={() => updateHandler(pd._id)}
                            >
                              {pd.status}
                            </Button>
                          )}

                          <Button
                            className='orderBtn'
                            onClick={() => deleteHandler(pd._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    );
};

export default ManageAllOrder;