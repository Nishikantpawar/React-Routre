import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    const exists = selectedItems.find((i) => i.id === item.id);

    if (exists) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const selectedTotal = selectedItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white py-24 px-6 md:px-16">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-wide">
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center mt-20 space-y-6">
          <p className="text-gray-400 text-xl">Your cart feels lonely 🥲</p>
          <Link
            to="/product"
            className="inline-block px-10 py-4 rounded-full
                       bg-rose-500 hover:bg-rose-600 transition
                       font-semibold text-lg shadow-xl"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="md:col-span-2 space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center
                           bg-white/5 backdrop-blur-xl border border-white/10
                           rounded-3xl p-6 shadow-2xl hover:shadow-rose-500/10 transition"
              >
                <div className="flex flex-col md:flex-row items-center flex-1">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-36 object-cover rounded-2xl shadow-lg"
                  />

                  <div className="flex-1 md:ml-8 mt-5 md:mt-0 space-y-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>

                    <p className="text-rose-400 font-bold text-lg">
                      ${item.price}
                    </p>

                    <p className="text-gray-400">
                      Quantity: {item.quantity}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-gray-400 hover:text-red-500 transition"
                      >
                        Remove
                      </button>

                      <button
                        onClick={() =>
                          alert(`Proceeding to payment for ${item.name}`)
                        }
                        className="px-5 py-2 rounded-full
                                   bg-rose-500 hover:bg-rose-600
                                   transition font-semibold
                                   shadow-lg text-sm"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* CHECKBOX */}
                <div className="mt-6 md:mt-0 md:ml-6">
                  <input
                    type="checkbox"
                    checked={selectedItems.some((i) => i.id === item.id)}
                    onChange={() => handleSelect(item)}
                    className="w-6 h-6 accent-rose-500 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY (Sticky on Desktop) */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10
                          rounded-3xl p-8 shadow-2xl h-fit sticky top-28">

            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">
              Order Summary
            </h3>

            {/* Selected Items */}
            <div className="mb-8">
              <p className="text-gray-400 mb-2">Selected Items Total</p>
              <p className="text-2xl font-bold text-rose-400">
                ${selectedTotal}
              </p>

              <button
                disabled={selectedItems.length === 0}
                onClick={() =>
                  alert("Proceeding to Selected Items Payment...")
                }
                className={`mt-4 w-full py-3 rounded-full transition font-semibold
                  ${
                    selectedItems.length === 0
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-rose-500 hover:bg-rose-600 shadow-lg"
                  }`}
              >
                Pay Selected
              </button>
            </div>

            {/* Full Total */}
            <div>
              <p className="text-gray-400 mb-2">Cart Total</p>
              <p className="text-3xl font-extrabold text-rose-500">
                ${totalPrice}
              </p>

              <button
                onClick={() =>
                  alert("Proceeding to Full Cart Payment...")
                }
                className="mt-6 w-full py-4 rounded-full
                           bg-rose-500 hover:bg-rose-600
                           transition font-semibold text-lg
                           shadow-xl"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
