import React from "react";
import Products from "../product/Product";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight mb-6">
          Welcome to ShopEase — Your Ultimate Shopping Destination
        </h1>
        <p className="max-w-xl mb-8 text-lg sm:text-xl">
          Discover amazing products, unbeatable deals, and fast delivery.
        </p>
        <a
          href="#products"
          className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold px-8 py-3 rounded shadow transition"
        >
          Shop Now
        </a>
      </section>

      {/* Products Section */}
      <main id="products" className="flex-grow bg-gray-50">
        <Products />
      </main>
    </div>
  );
};

export default Home;
