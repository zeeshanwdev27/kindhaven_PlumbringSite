import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../HeroSection/HeroSection';

function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect personal information such as your name, email address, phone number, and service details when you contact us or book a service. Additionally, non-personal data like browser type, device information, and usage statistics may be collected for analytics and service improvement.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "Your information is used to provide and improve our services, manage bookings, communicate updates, process payments, and enhance customer experience. We may also use non-personal data for analytics and platform optimization.",
    },
    {
      title: "3. Sharing of Information",
      content:
        "We do not sell or rent your personal information. Data may be shared with trusted service providers, payment processors, or technicians only when necessary to deliver the requested service. All partners follow strict confidentiality agreements.",
    },
    {
      title: "4. Data Protection & Security",
      content:
        "We implement strict security measures to safeguard your information from unauthorized access, alteration, or misuse. While we prioritize security, no method of data transmission is completely risk-free.",
    },
    {
      title: "5. Cookies & Tracking Technologies",
      content:
        "Our website may use cookies to personalize your experience, analyze traffic, and improve functionality. You can disable cookies in your browser settings, but doing so may impact certain features.",
    },
    {
      title: "6. Third-Party Links",
      content:
        "Our platform may contain links to external websites. We are not responsible for the content, policies, or privacy practices of third-party websites.",
    },
    {
      title: "7. Your Rights",
      content:
        "You have the right to access, update, or request deletion of your personal information. You may also opt-out of promotional communications at any time.",
    },
    {
      title: "8. Updates to This Policy",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will always be available on this page.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection name='Privacy Policy' description='Your privacy and trust are important to us at KindHaven.' />

      <div className="max-w-4xl mx-auto px-6 md:px-0 py-16 flex flex-col gap-12">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62] mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed text-md md:text-lg">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
