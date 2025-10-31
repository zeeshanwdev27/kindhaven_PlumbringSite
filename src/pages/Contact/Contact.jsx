import React from 'react'
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import HeroSection from '../HeroSection/HeroSection'
import Swal from "sweetalert2";

function Contact() {
  const themeColor = "#0A3D62";
  const themeColorLight = "#0d4a7a";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection name='Contact' description='At KindHaven, customer satisfaction is our top priority.'/>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h2 
                  className="text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  GET IN TOUCH
                </motion.h2>
                <motion.h3 
                  className="text-2xl font-semibold mb-6"
                  style={{ color: themeColor }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We Are Building A
                  Sustainable Future
                </motion.h3>
              </div>

              {/* Best Energy Solution */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4"
                style={{ borderLeftColor: themeColor }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Best Energy Solution
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Reliable, Efficient, And Tailored Planning Services That Solves Your Problems And Realizes Your Peace Of Mind. Experience The Difference Of Expert Consultation And Lasting Solutions.
                </p>
              </motion.div>

              {/* 24/7 Technical Support */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4"
                style={{ borderLeftColor: themeColor }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 mt-1" style={{ color: themeColor }} />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      24/7 Technical Support
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Just Like A Skilled Plumber Ensures Your Pipes Run Smoothly, Our 24/7 Technical Support Keeps Your IT Systems Operating Flawlessly—Anytime, Anywhere.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-100 rounded-md">
                  <p className="text-sm text-gray-700 font-medium">
                    Last Updated: 19/08/01 22:47
                  </p>
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5" style={{ color: themeColor }} />
                  <a 
                    href="mailto:info@kindhaven.net" 
                    className="hover:underline transition-colors"
                    style={{ color: themeColor }}
                  >
                    info@kindhaven.net
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mt-1" style={{ color: themeColor }} />
                  <span>3801 DYLAN PL LEXINGTON, KY 40514</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4" style={{ color: themeColor }} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Get In Touch With Us And Enjoy Top-Notch Support
                </h3>
              </motion.div>

              {/* Form Section */}
              <form className="space-y-6" onSubmit={async (e) => {
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
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ focusRingColor: themeColor }}
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name='email'
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ focusRingColor: themeColor }}
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Subject
                  </label>
                  <select 
                  name='subject'
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ focusRingColor: themeColor }}
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Sales</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Write Messages...
                  </label>
                  <textarea
                    rows={6}
                    name='message'
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ focusRingColor: themeColor }}
                    placeholder="Type your message here..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-200 shadow-md"
                  style={{ 
                    backgroundColor: themeColor,
                    hoverBackgroundColor: themeColorLight
                  }}
                  whileHover={{ scale: 1.02, backgroundColor: themeColorLight }}
                  whileTap={{ scale: 0.98 }}
                >
                  SEND MESSAGE
                </motion.button>
              </form>



            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact