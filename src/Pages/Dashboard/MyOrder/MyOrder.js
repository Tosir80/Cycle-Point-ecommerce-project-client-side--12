
import React, { useEffect, useState } from 'react';
import { Col, Row ,Button} from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const [orders,setOrders]=useState([])
    const {user} =useAuth()
useEffect(()=>{
        fetch(`http://localhost:5000/myorder/${user.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
},[orders])

const deleteOrder=(id)=>{
  const confirm=window.confirm("Are want remove product from your Order?")
  if(!confirm){return}
fetch(`http://localhost:5000/deleteOrder/${id}`, {
  method: 'DELETE',
})
  .then((res) => res.json())
  .then((data) =>{
      if(data.deletedCount==1){
           toast("Deleted Successfully !!")
      }
  });
}


return (
  <div>
    <h2 className='text-center py-4'>
      Your add to Cart Product {orders.length}
    </h2>
    <Row>
      <ToastContainer />;
      <Col>
        {orders.map((order) => (
          <div
            key={order._id}
            className='p-1 d-flex bg-info border-bottom border-success border-5 my-3 justify-content-around align-items-center me-3'
          >
            <h4>{order.name}</h4>
            <img
              style={{ width: '100px', height: '100px' }}
              className='rounded-circle'
              src={order.img}
              alt=''
            />
            <h3 className="text-primary">{order.price}</h3>
            <h4>{order.address}</h4>
            <h4>{order.phone}</h4>
            <h6>{order.date}</h6>
            <Button
              onClick={() => deleteOrder(order._id)}
              className='bg-danger'
            >
              Delete
            </Button>
          </div>
        ))}
      </Col>
    </Row>
  </div>
);
};

export default MyOrder;