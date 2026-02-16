import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20">
      
    
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-500/30 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-20">

       
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Built for <span className="text-rose-500">Smart Shopping</span>
            </h2>
            <p className="text-gray-300 mb-4">
              We are more than just an online store. Our mission is to deliver
              high-quality products at the best prices with a smooth and secure
              shopping experience.
            </p>
            <p className="text-gray-300">
              From trending items to everyday essentials, we curate products
              that bring value, quality, and style to your life.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center shadow-2xl">
            <p className="text-5xl font-bold text-rose-500">10K+</p>
            <p className="text-gray-300 mt-2">Happy Customers</p>
          </div>
        </section>

        
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
            Why Shop With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🚚", title: "Fast Delivery", desc: "Quick and reliable shipping on all orders." },
              { emoji: "💳", title: "Secure Payments", desc: "100% secure payment gateways you can trust." },
              { emoji: "⭐", title: "Premium Quality", desc: "Carefully selected products with quality assurance." },
              { emoji: "📞", title: "24/7 Support", desc: "Friendly support whenever you need help." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:shadow-2xl transition">
                <div className="text-4xl mb-3">{feature.emoji}</div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

       
        <section className="bg-rose-500/20 backdrop-blur-md rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Ready to Start Shopping?
          </h2>
          <p className="text-rose-100 mb-6">
            Discover amazing deals and premium products curated just for you.
          </p>
          <Link
            to="/Product"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Explore Products
          </Link>
        </section>

      </div>
    </section>
  );
};

export default Content;
