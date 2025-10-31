import React from "react";
import { motion } from "framer-motion";

function WorkingProgress() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-gray-50">
      {/* Soft Ambient Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#0A3D62]/20 rounded-full blur-[140px]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-16 md:gap-18 lg:gap-20 px-4 sm:px-6 text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-center"
        >
          <p className="text-base sm:text-lg font-semibold text-[#0A3D62] tracking-widest uppercase">
            Our Working Progress
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] text-center">
            <span className="block bg-linear-to-r from-[#0A3D62] via-amber-400 to-[#0A3D62] bg-clip-text text-transparent">
              Our Standard Working
            </span>
            <span className="block">Process</span>
          </h1>
          <p className="max-w-2xl text-gray-600 text-base md:text-lg mt-2 md:mt-3">
            A refined and efficient workflow designed to deliver excellence —
            from first contact to final handover, we handle everything with care.
          </p>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-14 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            { img: "service1.png", title: "Consultation", step: "Step 1", bg: "bg-amber-200/40" },
            { img: "service2.png", title: "Execution", step: "Step 2", bg: "bg-[#0A3D62]/20" },
            { img: "service3.png", title: "Completion", step: "Step 3", bg: "bg-amber-300/30" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              {/* Soft Rounded Shape Behind Image */}
              <div
                className={`absolute w-64 h-64 md:w-60 md:h-60 lg:w-72 lg:h-72 ${item.bg} rounded-full blur-[80px] md:blur-[90px] lg:blur-[100px]`}
              ></div>

              {/* Image Circle with Modern Hover */}
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="relative w-56 h-56 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl hover:shadow-[#0A3D62]/20 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Step Label */}
              <div className="mt-5 md:mt-4 lg:mt-6 text-center space-y-1">
                <p className="text-amber-400 font-bold text-base md:text-base lg:text-lg">{item.step}</p>
                <h3 className="text-lg md:text-lg lg:text-xl font-semibold text-[#0A3D62]">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkingProgress;