import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import valueImage from "../assets/images/stretcher.jpg";

const Services = () => {

  const services = [
    "Workplace wellness assessments",
    "Wellness strategy development",
    "Employee wellness policy development",
    "Wellness program design",
    " Organizational health diagnostics",
    "Employee Assistance Program and Mental Health Support",
    "Wellness monitoring and evaluation"
];


    const areas = [
      "Preventive health promotion and awareness",
      "Lifestyle disease prevention and management",
      "Nutrition and healthy living, weight management",
      "Physical activity promotion Office stretches, Zumba sessions, hikes, and walks",
      "Tailored wellness programs Mum's Club, CDMP, and Drug Delivery",
      "Wellness Screening"
  ];

  return (
     <section
         id="value"
         className="py-24 lg:py-32 px-6 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
   
           {/* Left Side */}
            <div className="flex justify-center">
             <img
               src={valueImage}
               alt="Employee Wellness"
               className="w-full max-w-xl h-[600px] object-cover rounded-[32px] shadow-xl"/>
           </div>
   

           {/* Right Side */}
           <div>
             <h2 className="text-4xl lg:text-5xl font-bold text-text mb-8">
              Our Service Portfolio
             </h2>
             <p className="text-lg leading-9 text-text-light mb-12">
                We design and implement comprehensive
                workplace wellness strategies aligned with
                organizational goals.
             </p>
             
             <br/>
            <p className="text-primary font-semibold mt-10">
               Services include:
             </p>
               <br/>
             {/* our services */}
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-14">
               {services.map((service, index) => (
                 <div key={index} className="flex items-start gap-3">
                   <FiCheckCircle className="text-primary text-2xl mt-1 flex-shrink-0" />
                   <p className="text-lg leading-8 text-text-light">
                     {service}
                   </p>
                 </div>
               ))}
             </div>


             <p className="text-primary font-semibold mt-10">
               Key Areas include:
             </p>
             {/* Areas */}
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-14">
               {areas.map((area, index) => (
                 <div key={index} className="flex items-start gap-3">
                   <FiCheckCircle className="text-primary text-2xl mt-1 flex-shrink-0" />
                   <p className="text-lg leading-8 text-text-light">
                     {area}
                   </p>
                 </div>
               ))}
   
             </div>


           </div>
         </div>
       </section>
  )
}
export default Services
