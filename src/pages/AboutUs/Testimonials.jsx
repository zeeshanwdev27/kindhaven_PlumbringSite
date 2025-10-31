import React from "react";
import { useState, useEffect } from "react";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

const testimonials = [
  {
    id: 1,
    name: "James Carter",
    position: "Homeowner, Greenfield Estate",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80",
    text: "KindHaven Plumbing saved the day! They arrived within the hour, fixed a major leak, and left everything spotless. Truly professional and reliable service.",
  },
  {
    id: 2,
    name: "Linda Martinez",
    position: "Restaurant Owner, Bluefin Diner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    text: "Our kitchen drain was constantly clogging, but after KindHaven’s visit, everything runs perfectly. They explained everything clearly and charged fairly.",
  },
  {
    id: 3,
    name: "Robert King",
    position: "Property Manager, CityHomes",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80",
    text: "We use KindHaven for all our rental properties — fast, efficient, and dependable. Their emergency service has saved us countless times!",
  },
  {
    id: 4,
    name: "Emma Wilson",
    position: "Home Renovator",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
    text: "KindHaven handled all the plumbing for our bathroom remodel. Excellent workmanship and communication throughout the project. Highly recommended!",
  },
];


  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };
  
  return (
    <section className="py-12 md:py-16 bg-white mb-8 md:mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with KindHaven.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
            {/* Testimonial Content */}
            <div className="flex flex-col items-center text-center">
              {/* Customer Image */}
              <div className="mb-4 md:mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Testimonial Text */}
              <blockquote className="mb-4 md:mb-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </blockquote>

              {/* Customer Info */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>

              {/* Carousel Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 scale-110 sm:scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;