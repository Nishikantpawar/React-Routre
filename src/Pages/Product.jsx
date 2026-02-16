import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => setProduct(response.data))
      .catch((err) => console.error(err));
  }, []);

  // Filtered products
  const filteredProducts = product.filter((item) => {
    const searchValue = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.price.toString().includes(searchValue) ||
      item.description?.toLowerCase().includes(searchValue)
    );
  });


  
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-500/30 blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-8">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center">
          Available Products
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 px-5 rounded-2xl bg-white/10 backdrop-blur-md text-white placeholder-gray-300 outline-none border border-white/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((item) => (
            <Link key={item.id} to={`/Product/${item.id}`} className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition p-5 transform hover:-translate-y-1 hover:scale-105 duration-500">

                <div className="w-full aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="mt-5 flex flex-col justify-between h-36">
                  <div>
                    <h6 className="font-medium text-lg sm:text-xl text-white mb-1">
                      {item.name}
                    </h6>
                    <p className="font-bold text-rose-500 text-lg sm:text-xl">
                      ${item.price}
                    </p>
                  </div>

                  <button className="mt-3 w-full py-3 px-4 flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293A1 1 0 007 17h12a1 1 0 001-1v-1H7z"
                      />
                    </svg>
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Product Found */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 mt-10 text-lg">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}

export default Product;
