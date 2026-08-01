import React from "react";
import officeImage from "../assets/images/hero.jpg"; // Replace with your image

const Organizations = () => {
  const leftColumn = [
    "Corporate organizations",
    "Financial institutions",
    "Manufacturing",
    "Healthcare",
    "Education",
  ];

  const rightColumn = [
    "Government agencies",
    "Development partners",
    "Non-Governmental organizations",
    "Professional associations",
    "Small and medium enterprises",
  ];

  return (
    <section id="organizations">
      {/* Top Image */}
      <div className="w-full h-[340px] lg:h-[430px] overflow-hidden">
        <img
          src={officeImage}
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-gradient-to-r from-primary via-[#2A9C95] to-secondary py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-10">
            Organizations We Serve
          </h2>

          <p className="text-2xl font-semibold text-white mb-14">
            We work across sectors including:
          </p>

          <div className="grid md:grid-cols-2 gap-24">

            {/* Left */}
            <ul className="space-y-5 text-white text-2xl">
              {leftColumn.map((item, index) => (
                <li key={index} className="flex items-start gap-5">
                  <span className="text-3xl leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Right */}
            <ul className="space-y-5 text-white text-2xl">
              {rightColumn.map((item, index) => (
                <li key={index} className="flex items-start gap-5">
                  <span className="text-3xl leading-none">•</span>
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
export default Organizations;