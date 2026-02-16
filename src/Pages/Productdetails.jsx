import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Productdetails() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        const product = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setData(product);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading.....
      </div>
    );

  // ✅ FIXED FUNCTION (UI same)
  function handleAddToCart() {
    addToCart({ ...data, quantity: 1 });
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24">

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-500/30 blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] pointer-events-none"></div>

      <div className="container px-5 py-24 mx-auto relative z-10">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">

          <img
            alt={data.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
            src={data.image}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-white">
            <h2 className=" text-xl title-font text-rose-500 tracking-widest">
              {data.name}
            </h2>

            <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">
              {data.description}
            </h1>

            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="text-gray-400 ml-3">4 Reviews</span>
              </span>
            </div>

            <p className="leading-relaxed text-gray-300 mb-6">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
            </p>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-700 mb-5">
              <div className="flex items-center gap-2">
                <span>Color</span>
                <button className="border-2 border-gray-500 rounded-full w-6 h-6"></button>
                <button className="border-2 border-gray-500 ml-1 bg-gray-700 rounded-full w-6 h-6"></button>
                <button className="border-2 border-gray-500 ml-1 bg-indigo-500 rounded-full w-6 h-6"></button>
              </div>

              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <select className="rounded border border-gray-500 py-2 bg-black text-white">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="title-font font-medium text-2xl text-indigo-400">
                ${data.price}
              </span>

              {/* ✅ UI SAME — only logic fixed */}
              <button
                className="flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded transition-all"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>

              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 transition">
                ❤️
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Productdetails;
