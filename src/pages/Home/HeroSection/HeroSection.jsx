import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightToLine } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);

function HeroSection() {
  const content = [
    {
      category: "ROOF & SERVICE BENEFITS",
      title: "We Do Many Things For EveryThings",
      description:
        "Benefit from specialized roof coverage for common issues, along with 24/7 claims support and access to a trusted network of licensed professionals ready to assist.",
      image: "plumber1.png",
    },
    {
      category: "HEATING, COOLING & ELECTRICAL SYSTEMS",
      title: "We Do Many Things For EveryThings",
      description:
        "Ensure year-round comfort and safety with reliable coverage for your electrical systems. This includes protection for heating, air conditioning, and home electrical repairs.",
      image: "plumber2.png",
    },
    {
      category: "PLUMBING & WATERING SYSTEMS",
      title: "We Do Many Things For EveryThings",
      description:
        "Prevent costly plumbing repairs with comprehensive coverage for pipes, fixtures, and leaks, helping to safeguard your home from potential water damage.",
      image: "plumber3.png",
    },
  ];

  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    // --- Auto scroll every 3 seconds ---
    const interval = setInterval(() => {
      api.scrollNext(); // move to next slide
    }, 3000);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval); // cleanup
    };
  }, [api]);

  // --- Text animation variants ---
  const textContainer = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 1 } },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="h-auto min-h-[80vh] md:h-[80vh] bg-gray-100 flex flex-col items-center justify-center overflow-hidden py-8 md:py-0">
      <div className="relative w-[90%] ">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {content.map((data, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-[50px]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.4,
                    y: activeIndex === index ? 0 : 40,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* --- Text Section --- */}
                  <motion.div
                    variants={textContainer}
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    exit="exit"
                    className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 md:order-1 text-center md:text-left"
                  >
                    <motion.p
                      variants={textItem}
                      className="text-sm md:text-lg font-semibold text-[#0A3D62] tracking-wide uppercase"
                    >
                      {data.category}
                    </motion.p>

                    <motion.h1
                      variants={textItem}
                      className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight"
                    >
                      {data.title}
                    </motion.h1>

                    <motion.p
                      variants={textItem}
                      className="text-sm md:text-base lg:text-md text-gray-600 leading-relaxed"
                    >
                      {data.description}
                    </motion.p>

                    <motion.div variants={textItem} className="flex justify-center md:justify-start">
                      <MotionLink
                      to={'/services'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex justify-center items-center gap-2 px-3 py-3 border border-[#0A3D62] w-40 md:w-[170px] lg:w-[180px] text-[#0A3D62] rounded-full transition-all duration-300 hover:bg-[#0A3D62] cursor-pointer hover:shadow-md"
                      >
                        <span className="font-medium group-hover:text-white text-sm md:text-base">
                          Our Services
                        </span>
                        <ArrowRightToLine
                          className="w-4 md:w-5 transition-transform duration-300 group-hover:text-white group-hover:translate-x-1.5"
                          strokeWidth={1.5}
                        />
                      </MotionLink>
                    </motion.div>
                  </motion.div>

                  {/* --- Image Section --- */}
                  <motion.div
                    className="relative flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0"
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 100,
                      scale: activeIndex === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    {/* Main Circle */}
                    <div className="w-[280px] h-[280px] md:w-[300px] md:h-[330px] lg:w-[430px] lg:h-[430px] rounded-full bg-[#0A3D62] z-10" />

                    <motion.img
                      src={data.image}
                      alt={data.title}
                      className="absolute object-contain w-[260px] md:w-[400px] z-20"
                      initial={{ opacity: 0, y: 80 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 80,
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* --- Lg Screen Circle Indicators --- */}
        <div className="hidden md:flex justify-center gap-3 mt-8 w-40">
          {content.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                backgroundColor:
                  activeIndex === index ? "#0A3D62" : "rgba(0,0,0,0)",
                scale: activeIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 1 }}
              className="h-3 w-3 rounded-full border border-[#0A3D62]"
            />
          ))}
        </div>

        {/* --- Small Screen Circle Indicators --- */}
        <div className="flex md:hidden justify-center gap-3 mt-6 md:mt-8 w-40 mx-auto">
          {content.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                backgroundColor:
                  activeIndex === index ? "#0A3D62" : "rgba(0,0,0,0)",
                scale: activeIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 1 }}
              className="h-3 w-3 rounded-full border border-[#0A3D62]"
            />
          ))}
        </div>
      </div>

      <motion.img
        src="tools.png"
        alt="tools"
        className="absolute bottom-0 right-0 w-[300px] md:w-[400px] lg:w-[500px] hidden md:block"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default HeroSection;