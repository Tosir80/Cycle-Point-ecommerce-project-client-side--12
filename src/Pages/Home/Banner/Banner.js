import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './banner.css'
const Banner = () => {
    return (
      <>
        <Carousel fade className='bg'>
          <Carousel.Item className='caption'>
            <div className='w-50'>
              <h2 className='caption2'>Brands Cycling Store</h2>
              <p className='ms-5 text-light'>
                Connect with other cyclists for group rides. Challenge yourself
                by competing in a cycling event. Join a cycling club to meet new
                people and discover new places to ride your bike. We can connect
                you.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className='caption'>
            <div className='w-50'>
              <h2 className='caption1'>Leisure Cycle - My Bike 26 Inch</h2>
              <p className='ms-5 text-light'>
                Cycles are an efficient and effective locomotive that not only
                makes for a great sport but also is a great way to get from one
                place to another that is easy on nature. Cycles are an integral
                part of every childhood. Everyone has really fond memories
                attached to the time they learnt how to ride. With Decathlon,
                buy cycle online from our range of cycles that suit the needs
                and wants for everyone.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className='caption'>
            <div className='w-50'>
              <h2 className='caption3'>EXplore and Collections </h2>
              <p className='ms-5 text-light'>
                Connect with other cyclists for group rides. Challenge yourself
                by competing in a cycling event. Join a cycling club to meet new
                people and discover new places to ride your bike. We can connect
                you.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );

};

export default Banner;