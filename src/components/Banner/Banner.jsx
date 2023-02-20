import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../assets/image 3.jpg'
import image2 from '../../assets/image 4.jpg'
import image3 from '../../assets/image 15.jpg'
import next from '../../assets/arrow-white-next.png'
import prev from '../../assets/arrow-white-prev.png'
import './styles.css'
import { useRef } from 'react'
import { useWindowSize } from 'react-use'
import _ from 'lodash'

const featuredArticles = [
  {
    title: "Breaking Into Product Design:",
    subtitle: "Advice from Untitled Founder, Frankie",
    description: "Let\'s get one thing out of the way: you don't need a fancy Bachelor's Degree to get into Product Design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can get into this growing industry",
    image: image1
  }, {
    title: "Coffee Dates with UX Designers:",
    subtitle: "Leah Fowler on Avoiding Design Debt",
    description: "We sat down with Leah Fowler to chat about her design systems work and how paying off design debt in small chunks helps to improve overall design consistency.",
    image: image2
  }, {
    title: "Step Up Your Game: ",
    subtitle: "The Benefits of a Product Designer Mentorship",
    description: "Highlights of the advantages of Mentorship for product designers, including skill development and career growth opportunities. Get ready to elevate your skillset!.",
    image: image3
  }
]

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
  const refs = useRef([]);
  const {width} = useWindowSize();

  return (
    <Carousel nextIcon={<NextIcon />} prevIcon={<PrevIcon />} fade className='mx-5 border-2' indicators={false}>
      {
        featuredArticles.map((article, key) => (
          <Carousel.Item key={key} className='border-5 carousel-item'>
            <img className='d-blok w-100' src={article.image} alt="" />
            <div className='image-gradient'></div>
            <Carousel.Caption >
              <h5>Featured</h5>
              <h1>{article.title}<br />{article.subtitle}</h1>
              <p>{width > 230 ? article.description : _.truncate(article.description, {length: 100})}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}
