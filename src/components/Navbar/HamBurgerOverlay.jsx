import React, { useEffect, useState } from "react";
import {
  X,
  Home,
  Users,
  Settings,
  Mail,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

function HamBurgerOverlay({ isOpen, setIsOpen }) {
  const [iconActive, setIconActive] = useState(true);

  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about-us", label: "About Us", icon: Users },
    { path: "/services", label: "Services", icon: Settings },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/refund-policy", label: "Refund Policy", icon: FileText },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          {/* Enhanced backdrop with gradient */}
          <motion.div
            className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-[#0A3D62]/90 to-[#0A3D62]/70"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {/* Modern sliding panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-full md:w-[420px] bg-white shadow-2xl flex flex-col border-l border-gray-100"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            {/* Header with accent color */}
            <div className="px-6 py-6 flex justify-between items-center bg-[#0A3D62]">
              <div className="flex items-center space-x-3 ml-5">
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  MENU
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
              </button>
            </div>

            {/* Navigation Body */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.1,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 px-4 py-4 rounded-xl text-gray-700 hover:bg-[#0A3D62]/5 hover:text-[#0A3D62] transition-all duration-200 group border border-transparent hover:border-[#0A3D62]/10"
                    >
                      <div className="p-2 bg-[#0A3D62]/10 rounded-lg group-hover:bg-[#0A3D62] group-hover:scale-110 transition-all duration-200">
                        <item.icon 
                          className="w-5 h-5 text-[#0A3D62] group-hover:text-white" 
                          strokeWidth={1.8}
                        />
                      </div>
                      <span className="font-medium text-lg tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer section */}
              <motion.div 
                className="mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-2">Need help?</p>
                  <a 
                    href="mailto:support@example.com" 
                    className="text-[#0A3D62] font-medium hover:underline text-lg"
                  >
                    support@example.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default HamBurgerOverlay;