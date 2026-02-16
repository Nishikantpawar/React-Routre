import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer className="bg-black text-gray-400 border-t border-white/10 py-8 px-6">

  <div className="max-w-5xl mx-auto text-center space-y-3">

    {/* Brand */}
    <h2 className="text-base font-semibold text-white tracking-wide">
      NoirCart
    </h2>

    {/* Small Links */}
    <div className="flex justify-center gap-6 text-xs">
      <span className="hover:text-rose-500 transition cursor-pointer">
        Privacy
      </span>
      <span className="hover:text-rose-500 transition cursor-pointer">
        Terms
      </span>
      <span className="hover:text-rose-500 transition cursor-pointer">
        Support
      </span>
    </div>

    {/* Copyright */}
    <p className="text-xs text-gray-500">
      © {new Date().getFullYear()} NoirCart. All rights reserved.
    </p>

  </div>

</footer>



  );
};

export default Footer;
