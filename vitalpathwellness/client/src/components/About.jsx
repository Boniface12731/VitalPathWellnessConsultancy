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
    description: "Learn more about VitalPath Wellness Consultancy.",
    icon: <FiUsers />,
    path: "/commitment",
  },
  {
    title: "Our Services",
    description: "Explore our comprehensive wellness solutions.",
    icon: <FiBriefcase />,
    path: "/services",
  },
  {
    title: "Vision & Mission",
    description: "Discover our purpose and long-term aspirations.",
    icon: <FiTarget />,
    path: "/vision-mission",
  },
  {
    title: "Value Proposition",
    description: "See how our programs create measurable impact.",
    icon: <FiTrendingUp />,
    path: "/value-proposition",
  },
  {
    title: "Why Choose Us",
    description: "Why organizations trust VitalPath Wellness.",
    icon: <FiAward />,
    path: "/why-choose-us",
  },
  {
    title: "Organizations",
    description: "Industries and sectors we proudly support.",
    icon: <FiLayers />,
    path: "/organizations",
  },
  {
    title: "Approach",
    description: "Our collaborative approach to workplace wellness.",
    icon: <FiHeart />,
    path: "/consulting-approach",
  },
  {
    title: "Contact Us",
    description: "Let's discuss your wellness goals.",
    icon: <FiPhone />,
    path: "/contact",
  },
];

const About = () => {
  return (
    <section className="py-24 px-6 lg:px-16 bg-gradient-to-r from-green-100 to-blue-200">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-primary font-semibold">
            Explore
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-text mt-3">
            Our Wellness Solutions
          </h2>

          <p className="mt-6 text-lg text-text-light max-w-3xl mx-auto leading-8">
            Explore our services, approach, and wellness solutions designed to
            help organizations build healthier, happier, and more productive
            workplaces.
          </p>

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
                        min-h-[200px]
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
                    min-h-[50px]
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
               
              </div>

            
                 <h3 className="text-2xl lg:text-3xl font-bold text-text mb-6 leading-tight">
                {page.title}
              </h3>
              <p className="text-text-light leading-7 mb-6">
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