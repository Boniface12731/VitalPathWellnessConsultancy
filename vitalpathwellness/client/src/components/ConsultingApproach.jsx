import React from "react";
import {
  FiSearch,
  FiEdit3,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

const ConsultingApproach = () => {
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

       <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
       <div className="max-w-7xl mx-auto flex flex-col gap-15">
          <h2 className="text-5xl lg:text-6xl font-bold text-text mb-8">
            Our Consulting
            <br />
            Approach
          </h2>


          <p className="text-xl leading-9 text-text-light">
            Our methodology follows a structured, results-oriented framework
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-25">
          {approach.map((step, index) => (
          <div
          key={index}
          className={`
          px-6
          xl:px-8
          ${index !== approach.length - 1 ? "xl:border-r xl:border-white/150" : ""}
          `}
          >
          <h3 className={`text-3xl font-bold mb-6 ${step.color}`}>
          {step.title}
          </h3>

          <div className="space-y-4">
          {step.items.map((item, i) => (
          <p
          key={i}
          className="text-lg leading-8 text-text-light"
          >
          {item}
          </p>
          ))}
          </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ConsultingApproach;