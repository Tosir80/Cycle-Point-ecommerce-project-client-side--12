import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Rating, RatingView } from 'react-simple-star-rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


const ShowReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/review')
        .then((res) => res.json())
        .then((data) => setReview(data));
    }, [review]);
    return (
      <Container>
        <h3 className='text-center pb-5 text-warning'>Ours Customer Review</h3>
        <Row >
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
             
            }}
            className='mySwiper '
          >
            {review.map((rw) => (
              <SwiperSlide>
                <Col>
                  <Card className='shadow m-3 p-2'>
                    <div>
                      {rw.img ? (
                        <div className='d-flex justify-content-between align-items-center p-2 '>
                          <img
                            style={{ width: '50px' }}
                            className='rounded-circle'
                            src={rw?.img}
                            alt=''
                          />
                          <h4>{rw.name}</h4>
                        </div>
                      ) : (
                        <h4>{rw.name}</h4>
                      )}
                    </div>
                    <p>{rw?.date}</p>
                    <div>
                      <p>{rw.Feedback}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                      <h6>Rating ({rw.rating}): </h6>
                      <RatingView ratingValue={rw.rating} />
                    </div>
                  </Card>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    );
};

export default ShowReview;