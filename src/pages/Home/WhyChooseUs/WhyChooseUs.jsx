import React from 'react';
import { motion } from 'framer-motion';

function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-20 bg-linear-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-3 md:gap-4 text-center md:text-left"
        >
          <p className="text-base md:text-lg font-semibold text-[#0A3D62] tracking-widest uppercase">
            Why Choosing Our Services
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Welcome to KindHaven, Your Trusted Partner In Home Warranty Services
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-3 md:mt-4">
            We are dedicated to providing homeowners with reliable, affordable protection
            for their essential systems and appliances. With a focus on customer satisfaction
            and a commitment to excellence, we strive to deliver seamless solutions that keep your home running smoothly.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <motion.img
            src="whychooseus.png"
            alt="whychooseus"
            className="rounded-3xl bg-gray-100 w-full lg:h-full md:h-[50vh] sm:h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;