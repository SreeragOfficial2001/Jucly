import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (path) =>
    location.pathname === path
      ? "border-b-2 border-gold pb-1 text-gold"
      : "hover:border-b-2 hover:border-gold pb-1 transition-all";

  return (
    <header className="bg-[#fffaf5] shadow-md py-5 px-6 font-sans sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
       
        <Link to="/" className="text-3xl font-extrabold text-[#2d1d1d] flex items-center justify-center w-full md:w-auto">
          <span className="text-gold">●</span>&nbsp;Jucly
        </Link>

       
        <div className="md:hidden flex items-center gap-4">
          <FiUser className="text-xl text-[#3d2b2b] hover:text-gold cursor-pointer transition" />
          {menuOpen ? (
            <FiX
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-[#3d2b2b] hover:text-gold cursor-pointer transition"
            />
          ) : (
            <FiMenu
              onClick={() => setMenuOpen(true)}
              className="text-2xl text-[#3d2b2b] hover:text-gold cursor-pointer transition"
            />
          )}
        </div>

        <nav className="hidden md:flex gap-8 text-base font-medium text-[#3d2b2b] justify-center w-full">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/booking" className={linkClasses("/booking")}>Booking</Link>
          <Link to="/track" className={linkClasses("/track")}>Track</Link>
          <Link to="/payment" className={linkClasses("/payment")}>Payment</Link>
          <Link to="/contact" className={linkClasses("/contact")}>Contact</Link>
        </nav>

        <div className="hidden md:block text-[#3d2b2b] text-xl">
          <FiUser className="hover:text-gold cursor-pointer transition" />
        </div>
      </div>

     
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-base font-medium text-[#3d2b2b] items-center text-center">
          <Link to="/" className={linkClasses("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/booking" className={linkClasses("/booking")} onClick={() => setMenuOpen(false)}>Booking</Link>
          <Link to="/track" className={linkClasses("/track")} onClick={() => setMenuOpen(false)}>Track</Link>
          <Link to="/payment" className={linkClasses("/payment")} onClick={() => setMenuOpen(false)}>Payment</Link>
          <Link to="/contact" className={linkClasses("/contact")} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
