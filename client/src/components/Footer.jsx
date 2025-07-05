import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-[#f1e9dc] py-16 px-6 md:px-24 font-sans tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        <div>
          <h1 className="text-4xl font-bold text-[#d4af37] mb-4 tracking-wider">
            Jucly
          </h1>
          <p className="text-sm text-[#c4b7a6] leading-relaxed">
            Premium cold-pressed juices crafted with the finest ingredients.
            Taste the luxury in every drop.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-6">Explore</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-[#d4af37] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="hover:text-[#d4af37] transition duration-300"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/track"
                className="hover:text-[#d4af37] transition duration-300"
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className="hover:text-[#d4af37] transition duration-300"
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#d4af37] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-6">Contact</h2>
          <p className="text-sm mb-2">
            Email: <span className="text-[#c4b7a6]">hello@jucly.com</span>
          </p>
          <p className="text-sm mb-6">
            Phone: <span className="text-[#c4b7a6]">+91 98765 43210</span>
          </p>
          <div className="flex space-x-5 text-xl">
            <a
              href="#"
              className="hover:text-[#d4af37] transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#d4af37] transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[#d4af37] transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-[#c4b7a6] mt-14 border-t border-[#3a3a3a] pt-6 tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#d4af37] font-medium">Jucly</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
