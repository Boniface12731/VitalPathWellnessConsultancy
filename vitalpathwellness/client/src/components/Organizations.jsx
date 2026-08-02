import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import officeImage from "../assets/images/stretcher.jpg";

const Organizations = () => {
  return (
    <section
      id="organizations"
      className="py-24 lg:py-32 bg-gradient-to-r from-green-100 to-blue-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-text mb-8">
              Organizations We Serve
            </h2>

            <p className="text-xl leading-10 text-text-light mb-14 max-w-2xl">
              We work across sectors including: 
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Corporate organizations
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Government agencies
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Financial institutions
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Development partners
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Manufacturing
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Non-Governmental Organizations
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Healthcare
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Professional associations
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Education
                </span>
              </div>

              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-primary mt-1" size={26} />
                <span className="text-lg text-text-light">
                  Small and medium enterprises
                </span>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center">

            <img
              src={officeImage}
              alt="Organizations We Serve"
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

export default Organizations;