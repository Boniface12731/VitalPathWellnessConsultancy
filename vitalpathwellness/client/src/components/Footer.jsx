import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company */}
          <div>

            <img
              src={logo}
              alt="VitalPath Wellness"
              className="w-33 bg-white rounded-xl p-2"
            />

            <p className="leading-8 text-white/90">
             Guiding the path to holistic wellbeing
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/90">

              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="/approach" className="hover:text-white">
                  Our Approach
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-white/90">

              <li>Preventive Health Promotion</li>

              <li>Lifestyle Disease Management</li>

              <li>Nutrition & Healthy Living</li>

              <li>Physical Activity Programs</li>

              <li>Wellness Screening</li>


            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3 items-start">

                <FiPhone className="mt-1 text-xl" />

                <span>+254 746 620 540</span>

              </div>

              <div className="flex gap-3 items-start">

                <FiMail className="mt-1 text-xl" />

                <span>vitalpathwellness@gmail.com</span>

              </div>

              <div className="flex gap-3 items-start">

                <FiMapPin className="mt-1 text-xl" />

                <span>Nairobi, Kenya</span>

              </div>

            </div>

            {/* Socials */}

            <div className="flex gap-5 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FiLinkedin size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FiFacebook size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition"
              >
                <FiInstagram size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 pt-8">
            <p className="text-white/80 text-center">
            © {new Date().getFullYear()} VitalPath Wellness Consultancy. All Rights Reserved.
            </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;