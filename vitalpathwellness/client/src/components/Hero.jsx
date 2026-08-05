import React, { useState, useEffect } from "react";
import heroImage from "../assets/images/meditation.jpg";
import hero from "../assets/images/hero.jpg";
import meditation from "../assets/images/meditation.jpg";
import happylady from "../assets/images/happylady.jpg";
import blacks from "../assets/images/blacks.jpg";
import zoezi from "../assets/images/zoezi.jpg";
import stretcher from "../assets/images/stretcher.jpg";
import logo from "../assets/images/logoslider.png";
import crop from "../assets/images/crop.png";
import wellnessone from "../assets/images/wellnessone.png";
import wellnesstwo from "../assets/images/wellnessone.png";
import wellnessthree from "../assets/images/wellnessone.png";
import wellnessfour from "../assets/images/wellnessone.png";
import wellnessfive from "../assets/images/wellnessone.png";

const Hero = () => {
  const images = [
  wellnessfive,
  wellnessfour,
  wellnessthree,
  wellnesstwo,
  wellnessone,
  crop,
  logo,
  hero,
  meditation,
  happylady,
  blacks,
  zoezi,
  stretcher,
];
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);


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
           
           <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-secondary">
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
            src={images[currentImage]}
            alt="VitalPath Wellness"
            className="
            w-full
            h-[450px]
            object-cover
            rounded-[30px]
            shadow-[0_20px_50px_rgba(0,85,165,0.18)]
            transition-all
            duration-700"/>

            <br/>

            <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition-all ${
            currentImage === index
            ? "bg-primary w-8"
            : "bg-white"
            }`}
            />
            ))}
            </div>

        </div>

        

      </div>
    </section>
  );
};

export default Hero;
