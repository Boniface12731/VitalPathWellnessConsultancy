import React from 'react'
import heroImage from "../assets/images/wellnessone.png";

const Hero = () => {
  return (

    <section
      id="home"
      className="min-h-screen px-8 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
       <div className="lg:pr-8 pt-28 lg:pt-32">

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary">
            VitalPath Wellness Consultancy
          </h1>

          <br/>
           
           <h1 className="text-3xl lg:text-6xl font-bold leading-tight text-secondary">
            Guiding the path to holistic wellbeing
          </h1>
          
        
          
          <br/>
          
        {/*Buttons*/}
        <div className="flex flex-wrap gap-5">
            <button
              onClick={() =>
                  document
                    .getElementById("about-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
              onClick={() =>
                    window.open(
                      "https://wa.me/254746620540?text=I%20would%20like%20to%20book%20a%20consultation",
                      "_blank"
                    )
                  }
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

        {/* Right Side */}
        <div>
          <img
            src={heroImage}
            alt="Wellness Consultation"
            className="rounded-[30px] shadow-[0_20px_50px_rgba(0,85,165,0.18)]"
          />
        </div>

        

      </div>
    </section>
  );
};

export default Hero;
