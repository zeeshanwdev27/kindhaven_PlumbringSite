import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom";

function FrequentAskQuestion({color}) {
  const services = [
    "New Construction Plumbing",
    "Septic System Services",
    "Emergency Repairs",
    "Drain Cleaning",
    "Water Heater Installation"
  ]

  const faqItems = [
    {
      id: "item-1",
      question: "How do I prevent frozen pipes in the winter?",
      answer: "Insulate exposed pipes and allow faucets to drip slightly during freezing temperatures. Maintain a consistent, warm temperature in your home, especially if you're away."
    },
    {
      id: "item-2",
      question: "What should I do if I have a leaky faucet?",
      answer: "Tighten or replace worn parts like washers; if the leak persists, call us on +19083142247"
    },
    {
      id: "item-3",
      question: "How often should I flush my water heater?",
      answer: "Flush your water heater annually to remove sediment buildup and maintain efficiency. Regular maintenance can extend its lifespan by several years."
    }
  ]

  // Theme colors based on color prop
  const theme = {
    primary: color ? '#0A3D62' : '#D97706', // amber-600 equivalent
    primaryLight: color ? '#0A3D62' : '#FBBF24', // amber-300 equivalent
    primaryLighter: color ? '#0A3D6233' : '#FEF3C733', // amber-50 with opacity
    primaryLightest: color ? '#0A3D621A' : '#FEF3C71A', // amber-50 with less opacity
    backgroundFrom: color ? '#E6F0F8' : '#FFFBEB', // amber-50 equivalent
    backgroundTo: color ? '#D4E4F1' : '#FFEDD5', // orange-50 equivalent
    border: color ? '#0A3D6233' : '#FCD34D33', // amber-200 equivalent
    hoverBg: color ? '#0A3D620D' : '#FEF3C70D', // amber-50/30 equivalent
  }

  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br"
      style={{
        background: `linear-gradient(135deg, ${theme.backgroundFrom} 0%, ${theme.backgroundTo} 100%)`
      }}
    >
      {/* Background with modern overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundColor: color ? '#0A3D621A' : '#F59E0B1A' }}
      />
      <img
        src="calltoaction.png"
        alt="Modern plumbing background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <span 
                className="text-xs sm:text-sm font-semibold uppercase tracking-wide"
                style={{ color: theme.primary }}
              >
                Frequently Asked Questions
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                You Have Questions,<br />
                <span style={{ color: theme.primary }}>We Have Answers</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-md">
                Get instant answers to common plumbing questions or reach out for personalized assistance.
              </p>
            </div>

            {/* Services List */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="font-semibold text-gray-900 text-base md:text-lg">Our Services</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {services.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 md:gap-3 text-gray-700 transition-colors group text-sm sm:text-base"
                    style={{ 
                      color: theme.primary,
                      '--hover-color': theme.primary
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full transition-colors"
                      style={{ 
                        backgroundColor: theme.primaryLight,
                        '--hover-bg': theme.primary
                      }}
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div 
            className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border"
            style={{ borderColor: theme.border }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <div 
                className="rounded-lg overflow-hidden"
                style={{ borderColor: theme.border, borderWidth: '1px' }}
              >
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={item.id}
                    value={item.id}
                    className={`px-3 sm:px-4 transition-colors ${
                      index !== faqItems.length - 1 ? 'border-b' : ''
                    }`}
                    style={{ 
                      borderColor: theme.border,
                      '--hover-bg': theme.hoverBg,
                      '--open-bg': theme.primaryLighter
                    }}
                  >
                    <AccordionTrigger 
                      className="text-left font-semibold text-gray-900 py-3 sm:py-4 hover:no-underline group text-sm sm:text-base"
                      style={{
                        '--hover-color': theme.primary,
                        '--open-color': theme.primary
                      }}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-3 sm:pb-4 leading-relaxed text-sm sm:text-base">
                      {item.answer.includes('+16592135042') ? (
                        <p>
                          {item.answer.split('+16592135042')[0]}
                          <a 
                            href="tel:+16592135042"
                            className="inline-flex items-center gap-1 font-semibold transition-colors"
                            style={{ 
                              color: theme.primary,
                              '--hover-color': color ? '#083055' : '#B45309'
                            }}
                          >
                            <span>+1 659 213 5042</span>
                          </a>
                        </p>
                      ) : (
                        <p>{item.answer}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </Accordion>

            {/* CTA Section */}
            <div 
              className="mt-6 md:mt-8 p-4 sm:p-6 rounded-lg md:rounded-xl border"
              style={{ 
                background: `linear-gradient(135deg, ${theme.primaryLighter} 0%, ${theme.primaryLightest} 100%)`,
                borderColor: theme.border
              }}
            >
              <h4 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">Still have questions?</h4>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm sm:text-base">Our experts are here to help you 24/7</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Link 
                  to="tel:+16592135042"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg transition-colors shadow-sm text-sm sm:text-base"
                  style={{ 
                    backgroundColor: theme.primaryLight,
                    color: color ? '#FFFFFF' : '#78350F',
                    '--hover-bg': theme.primary
                  }}
                >
                  Call Now +1 659 213 5042
                </Link>
                <Link 
                to="/contact"
                  className=" cursor-pointer inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border font-semibold rounded-lg transition-colors text-sm sm:text-base"
                  style={{ 
                    borderColor: theme.primaryLight,
                    color: theme.primary,
                    '--hover-bg': theme.primaryLighter
                  }}
                >
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        li:hover {
          color: var(--hover-color) !important;
        }
        li div {
          background-color: var(--hover-bg) !important;
        }
        .group:hover .text-gray-900 {
          color: var(--hover-color) !important;
        }
        [data-state=open] .text-gray-900 {
          color: var(--open-color) !important;
        }
        .hover\\:bg-amber-50:hover {
          background-color: var(--hover-bg) !important;
        }
        .data-\\[state\\=open\\]\\:bg-amber-50\\/30[data-state=open] {
          background-color: var(--open-bg) !important;
        }
        a:hover {
          color: var(--hover-color) !important;
        }
        a.bg-amber-300:hover {
          background-color: var(--hover-bg) !important;
        }
        button:hover {
          background-color: var(--hover-bg) !important;
        }
      `}</style>
    </section>
  )
}

export default FrequentAskQuestion