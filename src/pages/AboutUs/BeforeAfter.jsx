import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function BeforeAfter() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "aboutus/before.png",
      label: "Before",
      description: "Original state before our service"
    },
    {
      image: "aboutus/after.png", 
      label: "After",
      description: "Transformed result after our service"
    }
  ];

  // Auto-play effect - Fixed version
  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Cleanup: clear interval when component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [api, isAutoPlaying]); // Dependencies: re-run when api or isAutoPlaying changes

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-800">
          See The Difference
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Watch the transformation unfold automatically
        </p>
        
        {/* Shadcn Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
                  <img 
                    src={slide.image} 
                    alt={slide.label} 
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  
                  {/* Slide Label */}
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-black/80 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl font-semibold backdrop-blur-sm border border-white/20 text-sm md:text-base">
                    {slide.label}
                  </div>
                  
                  {/* Slide Description */}
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-black/80 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold backdrop-blur-sm border border-white/20 text-sm md:text-base">
                    <p className="text-center">{slide.description}</p>
                  </div>

                  {/* Auto-play Indicator */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 flex items-center space-x-2 z-20">
                    <div className="flex space-x-1">
                      <div className={`w-1 h-3 md:h-4 rounded-full bg-white ${isAutoPlaying ? 'animate-pulse' : 'opacity-50'}`}></div>
                      <div className={`w-1 h-3 md:h-4 rounded-full bg-white ${isAutoPlaying ? 'animate-pulse' : 'opacity-50'}`} style={{animationDelay: '0.2s'}}></div>
                      <div className={`w-1 h-3 md:h-4 rounded-full bg-white ${isAutoPlaying ? 'animate-pulse' : 'opacity-50'}`} style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>

                  {/* Slide Indicator */}
                  <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                          current === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  )
}

export default BeforeAfter