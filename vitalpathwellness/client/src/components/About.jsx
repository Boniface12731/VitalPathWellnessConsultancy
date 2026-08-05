import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiUsers,
  FiHeart,
  FiTarget,
  FiAward,
  FiLayers,
  FiBriefcase,
  FiPhone,
  FiTrendingUp,
} from "react-icons/fi";

    const pages = [
  {
    title: "About Us",
    description:
      "Learn more about VitalPath Wellness Consultancy and our commitment to healthier workplaces.",
    icon: <FiUsers />,
    path: "/commitment",
  },
  {
    title: "Our Services",
    description:
      "Explore our comprehensive workplace wellness solutions. From preventive health programs to lifestyle management",
    icon: <FiBriefcase />,
    path: "/services",
  },
  {
    title: "Vision & Mission",
    description:
      "Discover the purpose that drives VitalPath Wellness for healthier organizations and  meaningful workplace transformation",
    icon: <FiTarget />,
    path: "/vision-mission",
  },
  {
    title: "Value Proposition",
    description:
      "See how our evidence-based wellness programs create measurable value for organizations",
    icon: <FiTrendingUp />,
    path: "/value-proposition",
  },
  {
    title: "Why Choose Us",
    description:
      "Discover why organizations trust VitalPath Wellness as their wellness partner",
    icon: <FiAward />,
    path: "/why-choose-us",
  },
  {
    title: "Organizations",
    description:
      "Explore the industries, businesses, institutions, organizations and sectors we proudly serve",
    icon: <FiLayers />,
    path: "/organizations",
  },
  {
    title: "Approach",
    description:
      "Learn about our collaborative and client-centered consulting approach.",
    icon: <FiHeart />,
    path: "/consulting-approach",
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with our team to discuss your organization's goals and wellness needs.",
    icon: <FiPhone />,
    path: "/contact",
  },
];

const About = () => {
  return (
    <section 
    id="about-section"
    className="py-24 px-6 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold text-text">
            Our Wellness Solutions
          </h2>
           <br/>

          <p className="mt-6 text-lg text-text-light max-w-3xl mx-auto leading-8">
            Explore our services, approach, and wellness solutions designed to
            help organizations build healthier, happier, and more productive
            workplaces.
          </p>
          <br/>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {pages.map((page) => (
            <NavLink
              key={page.title}
              to={page.path}
              className="
                        group
                        bg-white
                        rounded-3xl
                        min-h-[0px]
                        min-w-[250px]
                        p-10
                        lg:p-12
                        shadow-md
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        ">

            <div 
              className="
                    group
                    bg-gradient-to-r from-primary to-secondary
                    rounded-3xl
                    p-10
                    lg:p-12
                    min-h-40px]
                    flex
                    flex-col
                    justify-start
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    ">
                {/* {page.icon} */}
              <h3 className="text-2xl lg:text-3xl text-center font-bold text-white mt-12 leading-tight">
                {page.title}
              </h3>
            </div>
             
              <p className="text-text leading-7 text-center">
                {page.description}
              </p>

              {/* <span className="text-primary font-semibold group-hover:underline">
                Learn More →
              </span> */}

            </NavLink>
          ))}

        </div>
      </div>
      
    </section>
  );
};

export default About;