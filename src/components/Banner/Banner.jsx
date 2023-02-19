import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../assets/image 3.jpg'
import image2 from '../../assets/image 4.jpg'
import image3 from '../../assets/image 15.jpg'
import next from '../../assets/arrow-white-next.png'
import prev from '../../assets/arrow-white-prev.png'
import './styles.css'

function PrevIcon() {
  return (
    <img className='nav-icons' src={prev} alt="" />
  )
}

function NextIcon() {
  return (
    <img className='nav-icons' src={next} alt="" />
  )
}

export default function Banner() {
  return (
    <Carousel nextIcon={<NextIcon />} prevIcon={<PrevIcon />} fade className='mx-5 border-2' indicators={false}>
      <Carousel.Item className='border-5 carousel-item'>
        <img className='d-blok w-100' src={image1} alt="" />
        <div className='image-gradient'></div>
        <Carousel.Caption >
          <h5>Featured</h5>
          <h1>Breaking Into Product Design: <br />Advice from Untitled Founder, Frankie</h1>
          <p>Let's get one thing out of the way: you don't need a fancy Bachelor's Degree to get into Product Design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can get into this growing industry</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item className='border-5 carousel-item'>
        <img className='d-blok w-100' src={image2} alt="" />
        <div className='image-gradient'></div>
        <Carousel.Caption>
          <h5>Featured</h5>
          <h1>Coffee Dates with UX Designers: <br />Leah Fowler on Avoiding Design Debt</h1>
          <p>We sat down with Leah Fowler to chat about her design systems work and how paying off design debt in small chunks helps to improve overall design consistency.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='border-5 carousel-item'>
        <img className='d-blok w-100' src={image3} alt="" />
        <div className='image-gradient'></div>
        <Carousel.Caption>
          <h5>Featured</h5>
          <h1>Step Up Your Game: <br />The Benefits of a Product Designer Mentorship</h1>
          <p>Highlights of the advantages of Mentorship for product designers, including skill development and career growth opportunities. Get ready to elevate your skillset!.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}
