import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner'
const ManageProduct = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

const deleteHandler =(id)=>{
  const confirm=window.confirm("Are want remove product from your Order?")
  if(!confirm){return}
fetch(`http://localhost:5000/deleteProduct/${id}`, {
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
      <ToastContainer />
      <Container>
        <h2 className='text-center py-5'>
          Available Product {services.length}
        </h2>
        {services.length === 0 ? (
          <div className='text-center'>
            {/* <Spinner animation='border' variant='primary' /> */}
            <Spinner></Spinner>
          </div>
        ) : (
          <Row xs={1} sm={1} md={3}>
            {services?.map((pd) => (
              <div key={pd._id}>
                <Card className='my-2 p-2  border-danger imgscale'>
                  <Card.Img
                    variant='top'
                    style={{ width: '100%', height: '200px' }}
                    src={pd.img}
                  />
                  <Card.Body>
                    <Card.Title>
                      {' '}
                      <h4>{pd.name}</h4>{' '}
                    </Card.Title>
                    <Card.Text>{pd.description.slice(0, 40)}</Card.Text>
                    <div className='d-flex justify-content-around'>
                      <h5 className='price'>${pd.price}</h5>
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
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ManageProduct;
