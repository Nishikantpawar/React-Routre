import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">


      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-500/30 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12
                      min-h-screen flex flex-col md:flex-row items-center">


        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Style That <span className="text-rose-500">Defines</span><br />
            Your Personality
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
            Shop the latest fashion, electronics & lifestyle essentials —
            curated just for you.
          </p>

          <Link
            to="/product"
            className="inline-block mt-10 px-10 py-4 rounded-full
                       bg-rose-500 hover:bg-rose-600 transition
                       font-semibold text-lg shadow-xl"
          >
            Shop Now
          </Link>
        </div>


        <div className="flex-1 mt-12 md:mt-0 flex justify-center relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1684785617081-2962277d3ac3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ecommerce model"
            className="w-[280px] md:w-[420px] rounded-3xl
                       shadow-2xl rotate-3 hover:rotate-0 transition duration-500"
          />


          <div className="absolute inset-0 bg-rose-500/20 blur-3xl -z-10 rounded-full" />
        </div>

      </div>

      {/* ================= FEATURED PRODUCTS ================= */}

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-rose-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-white">
          Featured <span className="text-rose-500">Products</span>
        </h2>

        <FeaturedProducts />

      </div>
    </section>

  );
};

export default Hero;
