import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselBanner() {
  return (
    // dark theme for dark buttons as it will get easy to handle in change by just changing the background color for the next, prev buttons
    <Carousel className='carousel w-75' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/122c7c65868dec69.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/f15b29daa9ad2ac1.jpg?q=50"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/50a78433b9c07bdd.jpg?q=50"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

