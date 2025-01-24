import React, { useState } from "react";
import { Link } from "react-scroll";
import ContactFormPopup from "../component/ContactFormPopup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <ContactFormPopup show={showPopup} closePopup={closePopup} />
    <nav className="bg-black w-full">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center bg-black py-1 px-10">
        <div>
          <img
            src="https://botbro.biz/wp-content/uploads/2022/04/Bot-Bro-PPT-pdf-1.png"
            alt="Logo"
            className="h-10 lg:h-16"
          />
        </div>
        
        <div className="flex gap-10 text-white">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h2>Home</h2>
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <h2>About Us</h2>
          </Link>
          <div onClick={openPopup} className="cursor-pointer">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="space-x-2">
          <button className="bg-[#2BA83C] py-1 px-8 text-white rounded-lg">
            Log in
          </button>
          <button className="bg-[#2BA83C] py-1 px-8 text-white rounded-lg">
            Open Account
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center px-4 py-2 bg-black">
        <img
          src="https://botbro.biz/wp-content/uploads/2022/04/Bot-Bro-PPT-pdf-1.png"
          alt="Logo"
          className="h-10"
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 bg-black text-white md:hidden">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h2>Home</h2>
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <h2>About Us</h2>
          </Link>
          <div onClick={openPopup} className="cursor-pointer">
            <h2>Contact Us</h2>
          </div>
          <div className="space-y-2 space-x-5">
            <button className="bg-[#2BA83C] py-2 px-6 text-white rounded-lg">
              Log in
            </button>
            <button className="bg-[#2BA83C] py-2 px-6 text-white rounded-lg">
              Open Account
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  
  );
};

export default Navbar;
