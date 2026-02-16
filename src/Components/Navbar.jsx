import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../Context/CartContext';

function Navbar({ title }) {

  const context = useContext(CartContext);
const cart = context?.cart || [];

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center">

        <Link className="flex title-font font-bold items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-rose-500 p-2 bg-white rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl text-white">{title}</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4 md:space-x-6">
          <Link to="/" className="hover:text-rose-500 font-medium transition-colors">Home</Link>
          <Link to="/Product" className="hover:text-rose-500 font-medium transition-colors">Product</Link>
          <Link to="/Content" className="hover:text-rose-500 font-medium transition-colors">Content</Link>
          <Link to="/Contact" className="hover:text-rose-500 font-medium transition-colors">Contact</Link>
        </nav>

        <Link
          to="/Cart"
          className="ml-4 inline-flex items-center bg-rose-500 hover:bg-rose-600 transition-colors py-2 px-4 rounded-full font-medium shadow-lg"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          CART {cart.length}
        </Link>
      </div>

      <div className="absolute inset-0 -z-10 bg-rose-500/10 blur-3xl"></div>
    </header>
  );
}

export default Navbar;
