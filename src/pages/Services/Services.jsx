import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import WorkingProgress from "../Home/WorkingProgress/WorkingProgress";
import CallToAction from "../Home/CallToAction/CallToAction";
import OurServices from "../Home/OurServices/OurServices";

function Services() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection
        name="Our Services"
        description="At KindHaven, customer satisfaction is our top priority."
      />
      {/* Our Services  Section*/}
      <OurServices />

      {/* CallToAction  Section*/}
      <CallToAction />

      {/* Our Working Progress  Section*/}
      <WorkingProgress />
    </div>
  );
}

export default Services;
