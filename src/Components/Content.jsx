import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Content.css'
import bg from '../Assets/Background.jpg'
import image1 from '../Assets/Page1.jpg'
import image2 from '../Assets/Page2.jpg'
import image3 from '../Assets/Page3.jpg'
const Content = () => {
  return (
    <div className='content'>
      <div className="background">
      <span className='title'>Digital Card Details</span>
      <img src={bg} alt="" />
      </div>
      <div className="card">
      </div>
      <div className="carousel-text">
      <Carousel className='carousel'>
        <div>
         <img src={image1} />
        </div>
        <div>
         <img src={image2} />
        </div>
        <div>
         <img src={image3} />
        </div>
        </Carousel>
        <div className="text">
        <h1>Card Title</h1>
        <span className='price'>$499</span>
        <p className>$2000</p>
        <span className='offer'>75%</span>
        <p className='desc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eaque cumque sed cupiditate at doloribus architecto, ipsam temporibus, praesentium molestias, voluptatem vel officiis perferendis rem dolor totam vitae. Commodi, officia!
        </p>
        <button className='try'>
        <span> Try This Card </span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Content
