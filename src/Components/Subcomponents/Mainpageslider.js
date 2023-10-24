import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Slider1 from "../../Assets/slider1.jpeg"

export default function Mainpageslider() {
  return (
    <div className=''>
      <Link className='cursor-default'>

        <Carousel controls={true}>
          <Carousel.Item>
            <img
              className="d-block w-100 max-h-[80vh]"
              src={Slider1}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 max-h-[80vh]"
              src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/u/n/untitled-1_2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

      </Link>
    </div>
  )
}
