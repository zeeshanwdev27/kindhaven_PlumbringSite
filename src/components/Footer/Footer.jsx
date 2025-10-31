import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#0A3D62] to-[#05233A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-60">
      {/* Ambient Gradient Motion Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05)_0%,transparent_50%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Main Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:gap-8"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Header - Only title for small/medium, title + cards for large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
          >
            <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">Get In Touch</h2>
            {/* Cards - Only visible on large screens */}
            <div className="hidden lg:flex gap-3">
              {["mastercard.png", "visa.png", "discover.png", "americanexpress.png"].map(
                (card, idx) => (
                  <motion.img
                    key={idx}
                    src={`./cards/${card}`}
                    alt={card}
                    className="w-15 h-12 opacity-80 hover:opacity-100 transition-transform duration-200"
                    whileHover={{ scale: 1.2 }}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2 md:gap-3 text-gray-200 text-sm"
          >
            {/* Cards - Visible only on small/medium screens below contact info */}
            <div className="flex lg:hidden gap-2 sm:gap-3 mb-4">
              {["card.png", "visa.png", "paypal.png", "stripe.png", "americanexpress.png"].map(
                (card, idx) => (
                  <motion.img
                    key={idx}
                    src={`./cards/${card}`}
                    alt={card}
                    className="w-8 h-6 sm:w-10 sm:h-8 opacity-80 hover:opacity-100 transition-transform duration-200"
                    whileHover={{ scale: 1.2 }}
                  />
                )
              )}
            </div>

            <p className="flex items-center gap-2 hover:text-amber-300 transition">
              <MapPin className="w-4 sm:w-5 text-amber-400" /> 3801 DYLAN PL LEXINGTON, KY 40514
            </p>
            <p className="underline flex items-center gap-2 hover:text-amber-300 transition">
              <Mail className="w-4 sm:w-5 text-amber-400" /> <Link to={"mailto:info@kindhaven.net"} className="underline" >info@kindhaven.net</Link>
            </p>
            <p className="flex items-center gap-2 hover:text-amber-300 transition">
              <Phone className="w-4 sm:w-5 text-amber-400" /> +1 659 213 5042
            </p>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-sm text-gray-400 mt-3 md:mt-4"
          >
            © 2025 KindHaven — All Rights Reserved.
          </motion.p>
        </motion.div>

        {/* Right Section (Newsletter) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg flex flex-col gap-4 md:gap-6"
        >
          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="text-2xl md:text-3xl font-extrabold text-amber-400"
          >
            <img src="./logo/logo2.PNG" className="w-40 h-8 md:w-48 md:h-10 lg:w-50 lg:h-10" alt="KindHaven" />
          </motion.h1>

          <p className="text-sm md:text-md text-gray-100 leading-relaxed opacity-90 font-medium">
            Subscribe to get the latest updates and expert insights directly in your inbox.
          </p>

          {/* Email Form */}
          <motion.form
onSubmit={async (e) => {
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
  }}
            className="flex w-full mt-1 md:mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 p-2 md:p-3 px-3 md:px-4 rounded-l-xl md:rounded-l-2xl border border-gray-300 bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-amber-400 transition text-sm md:text-base"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#FBBF24" }}
              transition={{ duration: 0.2 }}
              className="bg-amber-300 hover:!bg-amber-400 text-[#0A3D62] px-4 md:px-6 rounded-r-xl md:rounded-r-2xl flex items-center justify-center font-semibold cursor-pointer"
            >
              <MoveRight className="w-4 md:w-5" strokeWidth={1.5} />
            </motion.button>
          </motion.form>

        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;