import React, { useState } from 'react';
import { Col, Row} from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import './review.css'
import { toast, ToastContainer } from 'react-toastify';
import { Rating } from 'react-simple-star-rating';
const Review = () => {
    const {user}=useAuth()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [rating, setRating] = useState(0);
  const onSubmit = data =>{
      const date = new Date();
      const datee = date.toLocaleDateString()
    data.img=user.photoURL
    data.rating=rating
    data.date=datee
    fetch('http://localhost:5000/addreview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        if (data.acknowledged) {
          toast('Review Added Successfully !!');
        }
      });
      reset()
  }

// rating
 
const handleRating = (rate) => {
  setRating(rate);
  // Some logic
};


    return (
      <div>
        <Row>
          <Col>
            <ToastContainer />;
            <div className='review'>
              <h3 className='review-title'>Add your Review to about us</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register('name')} />
                <input defaultValue={user.email} {...register('email')} />
                <textarea
                  placeholder='Write your Feedback'
                  type='text'
                  {...register('Feedback', { required: true })}
                />
                <div className="d-flex">
                  <h5>Rating: </h5>
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating} /* Rating Props */
                  />
                </div>

                {/* <input
                  type='text'
                  placeholder='Give Rating'
                  {...register('rating',{ required: true })}
                /> */}
                <input className='reviewBtn' type='submit' value='Add Review' />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default Review;