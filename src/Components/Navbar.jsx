import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../Context/CartContext";

function Navbar({ title }) {
  const { cart = [] } = useContext(CartContext) || {};
  const location = useLocation();

 const navLink =
  "relative font-medium text-gray-200 transition duration-300 hover:text-rose-400";

  const activeLink =
  "text-rose-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-rose-400";

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-xl">
      <div className="container mx-auto flex flex-wrap p-4 md:p-6 flex-col md:flex-row items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 flex items-center justify-center 
                          bg-rose-500 rounded-full shadow-md">
            <span className="text-white font-bold text-lg">N</span>
          </div>

          <span className="ml-3 text-2xl font-bold tracking-wide">
            {title}
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="md:ml-auto flex items-center space-x-6 text-base">
          <Link
            to="/"
            className={`${navLink} ${
              location.pathname === "/" ? activeLink : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/Product"
            className={`${navLink} ${
              location.pathname === "/Product" ? activeLink : ""
            }`}
          >
            Product
          </Link>

          <Link
            to="/Content"
            className={`${navLink} ${
              location.pathname === "/Content" ? activeLink : ""
            }`}
          >
            Content
          </Link>

          <Link
            to="/Contact"
            className={`${navLink} ${
              location.pathname === "/Contact" ? activeLink : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CART BUTTON (Same Placement) */}
        <Link
          to="/Cart"
          className="ml-6 relative inline-flex items-center
                     bg-rose-500 hover:bg-rose-600
                     transition-all duration-300
                     py-2 px-6 rounded-full
                     font-semibold shadow-md hover:shadow-rose-500/40"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Cart

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 
                             bg-white text-rose-500 
                             text-xs font-bold 
                             w-5 h-5 flex items-center justify-center 
                             rounded-full shadow">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
