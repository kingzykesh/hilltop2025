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
            <img src="/assets/images/slide1.jpg" alt="" />
        </div>
        <div className="embla__slide">
            <img src="/assets/images/slide2.jpg" alt="" />
        </div>
        <div className="embla__slide">
            <img src="/assets/images/slide3.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
