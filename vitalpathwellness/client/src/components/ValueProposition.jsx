import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import valueImage from "../assets/images/stretcher.jpg";

const benefits = [
  "Enhanced workforce productivity",
  "Improved employee engagement",
  "Reduced absenteeism and presenteeism",
  "Better mental health outcomes",
  "Stronger organizational culture",
  "Improved employee retention",
  "Sustainable business performance",
];

const ValueProposition = () => {
  return (
    <section
      id="value"
      className="py-24 lg:py-32 px-6 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[4px] text-primary font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-text mb-8">
            Our Value Proposition
          </h2>

          <p className="text-lg leading-9 text-text-light mb-12">
            At VitalPath Wellness Consultancy, employee wellness is a
            strategic investment—not just a benefit. Our evidence-based
            programs create measurable outcomes that improve both employee
            well-being and organizational performance.
          </p>

          {/* Benefits */}

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-14">

            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">

                <FiCheckCircle className="text-primary text-2xl mt-1 flex-shrink-0" />

                <p className="text-lg leading-8 text-text-light">
                  {benefit}
                </p>

              </div>
            ))}

          </div>

          {/* Quote */}
          <div className="mt-6 pl-6">
            <p className="italic text-lg leading-9 text-text">
              Our interventions integrate global wellness best practices with
              practical, locally relevant, evidence-based solutions that
              promote healthier lifestyles and improve employee well-being.
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={valueImage}
            alt="Employee Wellness"
            className="w-full max-w-xl h-[600px] object-cover rounded-[32px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
export default ValueProposition;