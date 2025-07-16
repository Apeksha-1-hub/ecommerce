import React from "react";
import Products from "../product/Product";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-red-600 text-white flex flex-col md:flex-row items-center justify-center py-20 px-6 text-center md:text-left">
        {/* Text Content */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight  mb-10">
            Welcome to ShopEase — Your Ultimate Shopping Destination
          </h1>
          <p className="max-w-xl mb-8 text-lg sm:text-xl">
            Discover amazing products, unbeatable deals, and fast delivery.
          </p>
          <a
            href="#products"
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded shadow transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="photos\girl.png"
            alt="Girl shopping with bags"
            className="w-80 h-auto rounded-lg "
          />
        </div>
      </section>

      {/* Products Section */}
      <main id="products" className="flex-grow bg-gray-50">
        <Products />
      </main>
    </div>
  );
};

export default Home;
