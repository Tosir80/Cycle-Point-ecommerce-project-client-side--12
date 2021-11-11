import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Rating, RatingView } from 'react-simple-star-rating';
const ShowReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/review')
        .then((res) => res.json())
        .then((data) => setReview(data));
    }, [review]);
    return (
      <Container>
        <h3 className='text-center py-5 text-warning'>Ours Customer Review</h3>
        <Row xs={1} md={3}>
          {review.map((rw) => (
            <Col>
              <Card className="shadow m-3 p-2">
                <div className='d-flex justify-content-between align-items-center p-2 '>
                  <img style={{width:'50px'}} className="rounded-circle" src={rw?.img} alt='' />
                  <h4>{rw.name}</h4>
                </div>
                <p>{rw?.date}</p>
                <div>
                  <p>{rw.Feedback}</p>
                </div>
                <div className="d-flex align-items-center">
                  <h6>Rating ({rw.rating}): </h6>
                  <RatingView ratingValue={rw.rating} /> 
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default ShowReview;