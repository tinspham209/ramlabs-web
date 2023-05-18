'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import './styles.css';

type Props = {
  images: string[];
  urls: string[];
};

const Carousel: React.FC<Props> = ({ images, urls }) => {
  return (
    <div className="w-full">
      <Slider
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows
        autoplay
        autoplaySpeed={5000}
      >
        {images.map((img, index) => (
          <Link href={`/${urls[index]}`} key={`img-carousel-${index}`}>
            <Image
              src={img}
              alt={`image-${index}`}
              className="w-full object-contain"
              width={1920}
              height={730}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
