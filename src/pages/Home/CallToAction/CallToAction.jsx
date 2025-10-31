import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function CallToAction() {
  return (
    <motion.div
    id="calltoaction"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gray-100"
    >
      {/* Background Image */}
      <img
        src="calltoaction.png"
        alt="calltoactionbg"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#0A3D62_0%,#0A3D62_60%,#062a46_100%)] mix-blend-multiply bg-size-[200%_200%]"
      />

      {/* Soft Glow Behind */}
      <div className="absolute inset-0 bg-[#0A3D62]/40 blur-[100px]" />

      {/* Floating Light Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-amber-300/10 blur-[60px]"
            animate={{
              x: [Math.random() * 400, Math.random() * -400],
              y: [Math.random() * 200, Math.random() * -200],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white">
        <div className="relative w-full max-w-5xl rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-30 lg:gap-10 shadow-xl md:shadow-2xl border border-white/20">
          {/* Left Text & Form */}
          <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 w-full md:w-1/2">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold leading-snug">
              Having an <span className="text-amber-300">urgent problem</span> and can't wait?
            </h1>

            <form className="flex flex-col gap-3 md:gap-4" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                try {
                  const response = await fetch("https://kindhaven.net/sendmail.php", {
                    method: "POST",
                    body: formData,
                  });
                  const result = await response.text();
            
                  if (result.includes("success")) {
                    Swal.fire({
                      icon: "success",
                      title: "Subscribed!",
                      text: "🎉 Thank you! You've successfully subscribed to our newsletter.",
                      confirmButtonColor: "#FBBF24",
                    });
                    e.target.reset();
                  } else if (result.includes("invalid_email")) {
                    Swal.fire({
                      icon: "warning",
                      title: "Invalid Email",
                      text: "⚠️ Please enter a valid email address.",
                      confirmButtonColor: "#FBBF24",
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "❌ Something went wrong. Please try again later.",
                      confirmButtonColor: "#FBBF24",
                    });
                  }
                } catch (error) {
                  Swal.fire({
                    icon: "error",
                    title: "Network Error",
                    text: "🚨 Please check your connection and try again.",
                    confirmButtonColor: "#FBBF24",
                  });
                  console.error(error);
                }
              }}>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="flex-1 p-2 md:p-3 rounded-lg md:rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm md:text-base"
                />
                <input
                  type="email"
                  name='email'
                  required
                  placeholder="Email"
                  className="flex-1 p-2 md:p-3 rounded-lg md:rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm md:text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="flex-1 p-2 md:p-3 rounded-lg md:rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm md:text-base"
                />
                <motion.button
                type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #FBBF24" }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer px-5 md:px-6 py-2 md:py-3 bg-amber-300 hover:!bg-amber-400 text-[#0A3D62] font-semibold rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base"
                >
                  Submit
                </motion.button>
              </div>
            </form>

          </div>

          {/* Animated Image (unchanged) */}
          <div className="relative flex justify-center items-center md:w-1/2 ">
            <motion.img
              src="callaction.png"
              alt="callaction"
              className="w-60 md:w-72 lg:w-80 drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Soft Pulse Glow Behind Image */}
            <motion.div
              className="absolute w-60 h-60 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-amber-300/40 rounded-full blur-[120px]"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          
        </div>
      </div>
    </motion.div>
  );
}

export default CallToAction;