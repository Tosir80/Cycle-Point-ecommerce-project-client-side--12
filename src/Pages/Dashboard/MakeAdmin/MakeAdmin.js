import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
const MakeAdmin = () => {
 const [email,setEmail]=useState('')
const OnBlurHandle=(e)=>{
    setEmail(e.target.value) 
}
 const adminHandler=(e)=>{
     const user={email}
 fetch('http://localhost:5000/makeAdmin', {
   method: 'PUT',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(user),
 })
   .then((res) => res.json())
   .then((data) => {
     if (data.acknowledged) {
       toast('Admin Added Successfully !!');
     }
   });
    e.preventDefault()
 }
    return (
      <div>
        <Row>
          <ToastContainer />
          <Col>
            <div className='review mt-5'>
              <h4 className="text-center">Make an Admin</h4>
              <form onSubmit={adminHandler}>
                <input type='email' onBlur={OnBlurHandle} placeholder='Email' />
                <Button className='loginBtn mt-2' type='submit'>
                  Make Admin
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default MakeAdmin;