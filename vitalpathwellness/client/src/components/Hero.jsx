import React from 'react'
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (

    <section
      id="home"
      className="min-h-screen px-8 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
       <div className="lg:pr-8 pt-28 lg:pt-32">

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-text">
            VitalPath Wellness Consultancy
          </h1>

          <p className="mt-8 text-lg leading-8 text-text-light">
            VitalPath Wellness Consultancy is a health and workplace wellness
            consulting firm that helps organizations strengthen employee
            well-being, organizational performance, and long-term
            sustainability.
            <br />
            <br />
            We deliver integrated, evidence-informed wellness solutions that
            address physical health, mental well-being, occupational health,
            lifestyle risks, and workplace culture while aligning with each
            client's strategic objectives and workforce needs.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={heroImage}
            alt="Wellness Consultation"
            className="rounded-[30px] shadow-[0_20px_50px_rgba(0,85,165,0.18)]"
          />
        </div>

         <div className="mt-8 flex flex-wrap gap-5">
              <button
                className="
                  flex
                  items-center justify-center
                  min-w-[200px]
                  h-12
                  bg-gradient-to-r from-primary to-secondary
                  text-white
                  font-semibold
                  rounded-full
                  shadow-md
                  transition-all duration-300
                  hover:opacity-90
                  hover:scale-105
                  hover:shadow-lg">
                  Our Services
              </button>

              <button
                className="
                  flex
                  items-center justify-center
                  min-w-[200px]
                  h-12
                  bg-gradient-to-r from-secondary to-primary
                  text-white
                  font-semibold
                  rounded-full
                  shadow-md
                  transition-all duration-300
                  hover:opacity-90
                  hover:scale-105
                  hover:shadow-lg">
                  Book a Consultation
              </button>
         </div>

      </div>
    </section>
  );
};

export default Hero;
