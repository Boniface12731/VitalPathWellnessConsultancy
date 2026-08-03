import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

    const navLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "#about-section"},
      { label: "Services", href: "#about-section"},
      { label: "Approach", href: "#about-section"},
      { label: "Contact", href: "#about-section"},
    ];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-md py-2"
      : "bg-white/90 backdrop-blur-md py-4"
  }`}
>
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
  <div className="flex items-center gap-3">
   <Link to="/">
      <img
        src={logo}
        alt="VitalPath Logo"
        className="w-14 h-14 md:w-16 md:h-16 cursor-pointer"
      />
  </Link>
    <div>
        <h1 className="text-2xl font-bold text-primary">
            Vital Path
        </h1>
        <p className="text-xs text-secondary">
            Wellness Consultancy
        </p>
    </div>
    </div>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex items-center gap-10 ml-auto">
  {navLinks.map((link) => (
    <li key={link.label}>
      <a
        href={link.href}
        className="
            relative
            font-medium
            text-text
            transition-colors
            duration-300
            hover:text-primary
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-primary
            after:transition-all
            after:duration-300
            hover:after:w-full">
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <button
        onClick={() =>
              window.open(
                "https://wa.me/254746620540?text=I%20would%20like%20to%20book%20a%20consultation",
                "_blank"
              )
            }
      className="
        hidden md:flex
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
        Book Consultation
      </button>

      <button
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (<HiOutlineX size={30} />) : (<HiOutlineMenuAlt3 size={30}/>)}
      </button>

  </div>

    {menuOpen && (
    <div className="md:hidden bg-white shadow-lg px-6 py-6">
      <ul className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium hover:text-primary">
              {link.label}
            </a>
          </li>
        ))}

        <button
          className="mt-4 bg-primary text-white py-3 rounded-full font-medium">
          Book Consultation
        </button>
      </ul>
    </div>
    )}


  </nav>
  );
}
export default Navbar