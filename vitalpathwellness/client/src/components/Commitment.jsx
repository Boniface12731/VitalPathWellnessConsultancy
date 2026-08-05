import React from 'react'
import valueImage from "../assets/images/zoezi.jpg";
import {
  FiSearch,
  FiEdit3,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

const Commitment = () => {
     const approach = [
        {
          icon: <FiSearch />,
          title: "Assess",
          color: "text-primary",
          bg: "bg-green-100",
          border: "border-primary",
          items: [
            "Organizational needs assessment",
            "Employee wellness diagnostics",
            "Risk analysis",
          ],
        },
        {
          icon: <FiEdit3 />,
          title: "Design",
          color: "text-secondary",
          bg: "bg-blue-100",
          border: "border-secondary",
          items: [
            "Customized wellness strategy",
            "Program planning",
            "Performance indicators",
          ],
        },
        {
          icon: <FiSettings />,
          title: "Implement",
          color: "text-primary",
          bg: "bg-green-100",
          border: "border-primary",
          items: [
            "Program delivery",
            "Coaching",
            "Workshops",
            "Health Campaigns",
          ],
        },
        {
          icon: <FiBarChart2 />,
          title: "Evaluate",
          color: "text-secondary",
          bg: "bg-blue-100",
          border: "border-secondary",
          items: [
            "Participation analysis",
            "Outcome measurement",
            "Continuous improvement recommendations",
          ],
        },
      ];

  return (
     <section
      id="consulting"
       className="
        min-h-screen
        py-24
        lg:py-32
        px-6
        lg:px-16
        bg-gradient-to-r
        from-green-100
        via-blue-100
        to-blue-200">

 <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
     {/* Left Side */}
            <div className="flex justify-center">
             <img
               src={valueImage}
               alt="Employee Wellness"
               className="w-full max-w-xl h-[600px] object-cover rounded-[32px] shadow-xl"/>
            </div>

      {/* Right Side */}
       <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
       <div className="max-w-7xl mx-auto flex flex-col gap-15">
          <h2 className="text-5xl lg:text-6xl font-bold text-text mb-8">
           About Us
          </h2>

          <p className="text-xl leading-9 text-text-light">
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
      </div>
            
  </div>


       

    </section>
  )
}

export default Commitment
