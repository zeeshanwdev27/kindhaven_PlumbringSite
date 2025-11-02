import React from "react";
import { motion } from "framer-motion";
import { ArrowRightToLine, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);

function About({ active }) {
  return (
    <section
      id="about"
      className={`relative ${
        active ? "bg-gray-100" : "bg-[#0A3D62]"
      } text-white py-16 md:py-24 overflow-hidden`}
    >
      {/* Gradient Overlay Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A3D62] via-[#0c4f86] to-[#0A3D62] opacity-70" />

      {/* Decorative Blurs */}
      <div className="absolute -top-20 -right-32 w-72 h-72 bg-[#12649e] blur-[120px] opacity-30 rounded-full" />
      <div className="absolute bottom-0 -left-24 w-64 h-64 bg-[#12649e] blur-[100px] opacity-20 rounded-full" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:gap-6 text-center md:text-left"
        >
          <p className="text-amber-300 tracking-widest uppercase font-semibold text-sm md:text-base">
            About Our Plumbing
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Who We Are <br /> And What We Stand For
          </h1>

          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Our team proudly offers an on-time guarantee and a 100% customer
            satisfaction promise. We ensure that our licensed plumbers are
            highly trained, well-equipped, and always ready to meet your home's
            diverse plumbing needs.
          </p>

          <ul className="space-y-3 mt-3">
            {[
              "Comprehensive Appliance Coverage",
              "Expert Support Service",
              "Affordable Protection Plans",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-center md:justify-normal items-center gap-2 text-gray-100 text-sm sm:text-base"
              >
                <Check className="text-amber-300 w-4 h-4 sm:w-5 sm:h-5" />
                {item}
              </motion.li>
            ))}
          </ul>

          {active ? (
            <MotionLink
              to="tel:+16592135042"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-full sm:w-[250px] group mt-4 md:mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-amber-300 text-[#0A3D62] font-semibold rounded-full shadow-md hover:!bg-amber-400 transition-all duration-300 mx-auto md:mx-0"
            >
              <Phone
                className="w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
              <span>+1 659 213 5042</span>
            </MotionLink>
          ) : (
            <MotionLink
              to={"/about-us"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-full sm:w-[250px] group mt-4 md:mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-amber-300 text-[#0A3D62] font-semibold rounded-full shadow-md hover:!bg-amber-400 transition-all duration-300 mx-auto md:mx-0"
            >
              <span>Know More</span>
              <ArrowRightToLine
                className="w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </MotionLink>
          )}
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center order-first lg:order-last"
        >
          <div className="relative overflow-hidden shadow-2xl w-full max-w-md lg:w-auto lg:max-w-none">
            <img
              src="about-slider.png"
              alt="About Us"
              className="w-full h-[350px] sm:h-[400px] lg:h-[460px] object-cover"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0A3D62]/60 via-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.img
        src="arrow.png"
        alt="arrow"
        className="hidden lg:block absolute top-0 w-40 mt-129"
        animate={{
          x: [0, 40, 0], // move 40px right and back
        }}
        transition={{
          duration: 1.8, // how long one left-right cycle takes
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

export default About;
