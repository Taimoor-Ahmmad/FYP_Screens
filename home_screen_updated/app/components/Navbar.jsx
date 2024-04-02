"use client"
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

const NavLinks = ({ text, toggleNavbar }) => {
 return (
    <a
      href={`#${text}`}
      className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm md:text-lg font-medium transition duration-300 ease-in-out" // Adjusted text size for responsiveness
      onClick={() => toggleNavbar && toggleNavbar()}
    >
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </a>
 );
};

const Nav = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleNavbar = () => {
    setIsOpen(!isOpen);
 };

 return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={logo} alt="logo" width={100} height={30} />
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex md:items-center md:w-auto pr-20 space-x-9">
        {["home", "about", "download", "features"].map((text) => (
          <NavLinks key={text} text={text} toggleNavbar={toggleNavbar} />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleNavbar}
          className="text-white hover:text-blue-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-white" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-10 right-6">
          <div className="flex flex-col space-y-2 items-center">
            {["home", "about", "download", "features"].map((text) => (
              <NavLinks key={text} text={text} toggleNavbar={toggleNavbar} />
            ))}
          </div>
        </div>
      )}
    </nav>
 );
};

export default Nav;
