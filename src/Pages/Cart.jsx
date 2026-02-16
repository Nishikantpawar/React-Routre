// import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";


const Cart = () => {
  // Yaha se 
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSelect = (item) => {
    const exists = selectedItems.find(i => i.id === item.id);

    if (exists) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const selectedTotal = selectedItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);


  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  //YE Select ke liye tha

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 md:px-12 relative">

      <h2 className="text-4xl font-extrabold mb-10 text-center ">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-300 text-xl mt-20">
          Your cart is empty. <br />
          <Link
            to="/product"
            className="inline-block mt-10 px-10 py-4 rounded-full
                       bg-rose-500 hover:bg-rose-600 transition
                       font-semibold text-lg shadow-xl"
          >
            Add Now
          </Link>
        </p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-8">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center 
               bg-white/10 backdrop-blur-md rounded-3xl p-5 shadow-2xl"
            >

              {/* LEFT SIDE (Image + Content) */}
              <div className="flex flex-col md:flex-row items-center flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                />

                <div className="flex-1 md:ml-8 mt-5 md:mt-0">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-rose-500 font-bold text-lg">${item.price}</p>
                  <p className="mt-2">Quantity: {item.quantity}</p>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-gray-300 hover:text-red-500 transition"
                    >
                      Remove
                    </button>

                    <button
                      onClick={() => alert(`Proceeding to payment for ${item.name}`)}
                      className="px-6 py-2 rounded-full
                       bg-rose-500 hover:bg-rose-600
                       transition font-semibold
                       shadow-lg text-sm"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE CHECKBOX */}
              <div className="mt-6 md:mt-0 md:ml-6">
                <input
                  type="checkbox"
                  checked={selectedItems.some(i => i.id === item.id)}
                  onChange={() => handleSelect(item)}
                  className="w-6 h-6 accent-rose-500 cursor-pointer"
                />
              </div>

            </div>
          ))}


          {/* <div className="text-right mt-10 space-y-6">
            <p className="text-2xl font-bold">
              Total: <span className="text-rose-500">${totalPrice}</span>
            </p>
          </div> */}
          <div className="text-right mt-10 space-y-5">

            {/* Selected Items Total */}
            <div>
              <p className="text-xl font-semibold text-gray-300">
                Selected Items Total:
                <span className="text-rose-400 ml-2">
                  ${selectedTotal}
                </span>
              </p>

              <button
                disabled={selectedItems.length === 0}
                onClick={() => alert("Proceeding to Selected Items Payment...")}
                className={`mt-3 px-10 py-3 rounded-full
                 transition font-semibold text-md shadow-lg
                 ${selectedItems.length === 0
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-rose-500 hover:bg-rose-600"
                  }`}
              >
                Pay Selected Items
              </button>
            </div>

            {/* Full Cart Total */}
            <div>
              <p className="text-2xl font-bold">
                Total:
                <span className="text-rose-500 ml-2">
                  ${totalPrice}
                </span>
              </p>

              <button
                onClick={() => alert("Proceeding to Full Cart Payment...")}
                className="mt-3 px-12 py-4 rounded-full
                 bg-rose-500 hover:bg-rose-600
                 transition font-semibold text-lg
                 shadow-xl"
              >
                Proceed to Payment
              </button>
            </div>

          </div>


        </div>
      )}
    </section>
  );
};

export default Cart;
