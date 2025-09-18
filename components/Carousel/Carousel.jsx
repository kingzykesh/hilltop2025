'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../Carousel/carousel.css'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src="/assets/images/slide1.jpeg" alt="" />
        </div>
         <div className="embla__slide">
            <img src="/assets/images/slide4.png" alt="" />
        </div>
        <div className="embla__slide">
            <img src="/assets/images/slide2.jpeg" alt="" />
        </div>
        <div className="embla__slide">
            <img src="/assets/images/slide3.jpeg" alt="" />
        </div>
         <div className="embla__slide">
            <img src="/assets/images/slide5.png" alt="" />
        </div>
      </div>
    </div>
  )
}
