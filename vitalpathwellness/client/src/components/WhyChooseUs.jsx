import React from "react";
import gymImage from "../assets/images/hero.jpg"; // Replace with your image

const WhyChooseUs = () => {
  const leftColumn = [
    "Tailored consulting solutions",
    "Evidence-based methodologies",
    "Experienced wellness professionals",
    "Strategic partnerships",
  ];

  const rightColumn = [
    "Measurable program outcomes",
    "Flexible delivery models",
    "Confidential and ethical practice",
  ];

  return (
    <section id="why-choose-us">
      {/* Top Image */}
      <div className="w-full h-[340px] lg:h-[430px] overflow-hidden">
        <img
          src={gymImage}
          alt="Employees exercising"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-gradient-to-r from-primary via-[#2A9C95] to-secondary py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Why Choose VitalPath Wellness
          </h2>

          <p className="text-2xl text-white font-medium leading-10 max-w-5xl mb-10">
            Our clients value our combination of technical expertise and
            practical implementation.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center border border-white rounded-xl px-5 py-2 mb-16">
            <span className="text-white text-3xl font-semibold">
              We offer:
            </span>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-24">

            {/* Left */}
            <ul className="space-y-5">
              {leftColumn.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-5 text-white text-xl lg:text-2xl leading-9"
                >
                  <span className="text-2xl mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Right */}
            <ul className="space-y-5">
              {rightColumn.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-5 text-white text-xl lg:text-2xl leading-9"
                >
                  <span className="text-2xl mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;