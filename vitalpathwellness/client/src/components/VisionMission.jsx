import React from "react";
import { FiEye, FiTarget } from "react-icons/fi";
import visionImage from "../assets/images/stretcher.jpg";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="py-24 lg:py-32 px-6 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.25fr_1.1fr] gap-16 lg:gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[6px] text-primary font-semibold mb-4">
            Our Purpose
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-text mb-14">
            Vision & Mission
          </h2>

          {/* Cards */}
          <div className="flex flex-col gap-10">
            {/* Vision */}
            <div
              className="
                bg-white
                rounded-3xl
                p-8
                lg:p-10
                shadow-xl
                border-l-[8px]
                border-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <div className="flex gap-6 items-start">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FiEye className="text-primary text-3xl" />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-primary mb-5">
                    Vision
                  </h3>

                  <p className="text-lg leading-9 text-text-light">
                    To be the leading wellness consultancy transforming
                    workplaces through innovative, sustainable, and measurable
                    health and wellness solutions.
                  </p>

                </div>

              </div>
            </div>

            {/* Mission */}
            <div
              className="
                bg-white
                rounded-3xl
                p-8
                lg:p-10
                shadow-xl
                border-l-[8px]
                border-blue
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <div className="flex gap-6 items-start">

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-blue text-3xl" />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-blue mb-5">
                    Mission
                  </h3>

                  <p className="text-lg leading-9 text-text-light">
                    To enable organizations to cultivate healthier, more
                    resilient, and high-performing workforces through strategic
                    wellness consulting, preventive health interventions, and
                    capacity development.
                  </p>

                </div>

              </div>
            </div>


             {/* Commitment */}
            <div
              className="
                bg-white
                rounded-3xl
                p-8
                lg:p-10
                shadow-xl
                border-l-[8px]
                border-blue
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <div className="flex gap-6 items-start">

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-blue text-3xl" />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-blue mb-5">
                    Our Commitment
                  </h3>

                  <p className="text-lg leading-9 text-text-light">
                      AtVitalPath Wellness Consultancy , organizational success starts with healthy
                      people, and we help clients build resilient workplaces where employees
                      thrive, leadership is strengthened, and performance is sustained through
                      comprehensive wellness strategies; success is measured by the lasting impact
                      we create for clients and the communities they serve
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center lg:justify-end">

          <img
            src={visionImage}
            alt="Woman stretching"
            className="
              w-full
              max-w-sm
              lg:max-w-md
              rounded-[36px]
              object-cover
              shadow-[0_25px_60px_rgba(0,85,165,0.20)]
              transition-all
              duration-500
              hover:scale-[1.02]"/>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;