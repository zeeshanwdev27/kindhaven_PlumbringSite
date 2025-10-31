import React, { useEffect, useState } from "react";
import { Wrench, ThermometerSun, Gauge, BrickWall } from "lucide-react";
import { motion } from "framer-motion";

function OurServices() {
  const services = [
    {
      title: "Interior Plumbing",
      image: "service.png",
      icon: <Wrench className="w-6 h-6 text-amber-700 group-hover:text-white" />,
    },
    {
      title: "Electrical System",
      image: "service_img2.png",
      icon: (
        <ThermometerSun className="w-6 h-6 text-amber-700 group-hover:text-white" />
      ),
    },
    {
      title: "Budget-Friendly Coverage Plans",
      image: "service_img3.png",
      icon: <Gauge className="w-6 h-6 text-amber-700 group-hover:text-white" />,
    },
    {
      title: "Roof‐Leak Coverage",
      image: "roofleaking.png",
      icon: <BrickWall className="w-6 h-6 text-amber-700 group-hover:text-white" />,
    },
    {
      title: "Laundry Appliances",
      image: "laundary.png",
      icon: <Gauge className="w-6 h-6 text-amber-700 group-hover:text-white" />,
    },
  ];

  // Duplicate array for seamless infinite effect
  const loopServices = [...services, ...services];

    const [xDistance, setXDistance] = useState("-50%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setXDistance("-100%"); // small screen
      } else {
        setXDistance("-50%"); // large screen
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-100 py-16 md:py-24 overflow-hidden" id="services">
      <div className="flex flex-col gap-12 md:gap-20 px-4 sm:px-6 lg:px-8 xl:pl-20 xl:pr-10">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-2 lg:px-30 text-center md:text-left">
          <p className="text-base md:text-lg font-semibold text-[#0A3D62] tracking-wide uppercase">
            OUR BEST SERVICES
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 items-center md:items-baseline">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-[1.1]">
              <span className="block">Home Warranty</span>
              <span className="block">Services</span>
            </h1>

            <p className="text-sm sm:text-md text-gray-600 leading-relaxed lg:w-1/3 opacity-90 font-semibold max-w-2xl lg:max-w-none">
              Our team proudly offers an on-time guarantee and a 100% customer
              satisfaction guarantee. It's why we make sure that our licensed
              plumbers deliver quality service on every call.
            </p>
          </div>
        </div>

        {/* Infinite Scrolling Row */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: ["0%", xDistance] }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopServices.map((data, index) => (
              <div
                key={index}
                className="relative w-[280px] sm:w-[300px] md:w-[320px] h-80 sm:h-[360px] md:h-[392px] rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl shrink-0"
              >
                {/* Background Image */}
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />

                {/* Top-left Tool Icon */}
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md group-hover:bg-[#0A3D62] transition-colors duration-300">
                  {data.icon}
                </div>

                {/* Bottom Text Box */}
                <div className="text-center text-sm sm:text-[15px] absolute w-[80%] bottom-4 left-1/2 -translate-x-1/2 bg-white text-amber-700 font-semibold px-4 py-3 rounded-md shadow-md group-hover:bg-[#0A3D62] group-hover:text-white transition-all duration-300">
                  {data.title}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Optional gradient fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 w-20 md:w-40 h-full bg-linear-to-r from-gray-100 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-20 md:w-40 h-full bg-linear-to-l from-gray-100 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default OurServices;