import React, {useEffect, useState, useCallback} from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from 'react-bootstrap';


export default function Carousel({ slides, autoPlay = true, interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, nextSlide])

  return (
    <div className="relative h-[600px] -mt-[3rem] w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide

        let alignmentClasses = "items-center text-center"
        if (slide.align === "left") alignmentClasses = "items-start text-left"
        if (slide.align === "right") alignmentClasses = "items-end text-right"

        return (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={1920}
              height={600}
              className="absolute inset-0 h-full w-full object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div
              className={`container relative z-10 flex h-full flex-col justify-center px-4 text-white md:px-6 ${alignmentClasses}`}
            >
              <h1 className="mb-4 max-w-[800px] text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-6 max-w-[600px] text-lg text-gray-100 md:text-xl">{slide.description}</p>
              <div>
                <Button variant='secondary'>
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </Button>
              </div>
            </div>
          </div>
        )
      })}

      <button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </button>

      <button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
