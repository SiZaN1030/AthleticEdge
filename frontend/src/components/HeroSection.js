import React from 'react';
import Carousel from './Carousel';
import img1 from '../public/carousel-img-1.png'
import img2 from '../public/carousel-img-2.png'
import img3 from '../public/carousel-img-3.png'

const carouselSlides = [
  {
    image: img1,
    title: "Elevate Your Performance with AthleticEdge",
    description:
      "Premium sportswear designed for athletes who demand the best. Comfort, style, and performance in every stitch.",
    buttonText: "Shop Now",
    buttonLink: "/products",
    align: "left",
  },
  {
    image: img2,
    title: "Summer Collection 2082",
    description: "Lightweight, breathable fabrics designed for peak summer performance.",
    buttonText: "Explore Collection",
    buttonLink: "/products",
    align: "center",
  },
  {
    image: img3,
    title: "Up to 20% Off Running Gear",
    description: "Limited time offer on our premium running collection. Hurry while supplies last!",
    buttonText: "Shop Sale",
    buttonLink: "/products",
    align: "right",
  },
]
const HeroSection = () => {
  return (
    <>
     <Carousel slides={carouselSlides} />
    </>

  );
};

export default HeroSection;
