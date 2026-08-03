import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import chooseImage from "../assets/images/stretcher.jpg";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-24 lg:py-32 bg-gradient-to-r from-green-100 to-blue-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-text mb-8">
              Why Choose VitalPath Wellness
            </h2>
                <br/>
            <p className="text-xl leading-10 text-text-light mb-12 max-w-2xl">
              Our clients value our combination of technical expertise,
              evidence-based wellness strategies, and practical implementation
              that delivers measurable organizational impact.
            </p>
            <br/>
            <div className="text-black px-6 py-3 rounded-full font-semibold text-lg mb-12">
              We Offer:
            </div>

              <br/>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Tailored consulting solutions
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Measurable program outcomes
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Evidence-based methodologies
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Flexible delivery models
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Experienced wellness professionals
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Confidential and ethical practice
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle
                  className="text-primary mt-1 flex-shrink-0"
                  size={26}
                />
                <span className="text-lg text-text-light">
                  Strategic partnerships
                </span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src={chooseImage}
              alt="Why Choose VitalPath Wellness"
              className="
                w-full
                max-w-2xl
                h-[500px]
                lg:h-[650px]
                object-cover
                rounded-[40px]
                shadow-2xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;