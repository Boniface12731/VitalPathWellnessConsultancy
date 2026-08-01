import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-primary via-[#2A9C95] to-secondary py-28 lg:py-36 px-6 lg:px-16"
    >
      <div className="max-w-5xl mx-auto text-center text-white">

        {/* Decorative Lines */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-32 h-[3px] bg-white rounded-full"></div>

          <h2 className="text-5xl lg:text-6xl font-bold whitespace-nowrap">
            Contact Us
          </h2>

          <div className="w-32 h-[3px] bg-white rounded-full"></div>
        </div>

        {/* Contact Information */}
        <div className="mt-24 space-y-10">

          <div className="text-2xl lg:text-3xl">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:vitalpathwellness@gmail.com"
              className="font-normal hover:underline"
            >
              vitalpathwellness@gmail.com
            </a>
          </div>

          <div className="text-2xl lg:text-3xl">
            <span className="font-bold">Telephone:</span>{" "}
            <a
              href="tel:+254746620540"
              className="font-normal hover:underline"
            >
              +254 746 620 540
            </a>
          </div>

          <div className="text-2xl lg:text-3xl">
            <span className="font-bold">Website:</span>{" "}
            <a
              href="https://www.vitalpathwellness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal hover:underline"
            >
              www.vitalpathwellness.com
            </a>
          </div>

          <div className="text-2xl lg:text-3xl">
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/company/vitalpathwellness"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal hover:underline break-all"
            >
              linkedin.com/company/vitalpathwellness
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;