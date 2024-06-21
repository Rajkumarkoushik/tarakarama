import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} className='slide-images'>
      <Carousel.Item>
                  <img src="/assets/images/banner-images/slide-1.jpg" alt="Slide Img" />
      </Carousel.Item>
              <Carousel.Item>
              <img src="/assets/images/banner-images/slide-2.jpeg" alt="Slide Img" />
      </Carousel.Item>
              <Carousel.Item>
              <img src="/assets/images/banner-images/slide-3.jpeg" alt="Slide Img" />
      </Carousel.Item>
    </Carousel>

      </>
  )
}

export default HomeSlide