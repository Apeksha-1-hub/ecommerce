import React from "react";
import Products from "../product/Product";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col py-15">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-400  text-white flex flex-col md:flex-row items-center justify-center py-25 px-6 text-center md:text-left">
        {/* Text Content */}
        <div className="flex-1 mb-8 md:mb-0 md:pl-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight  mb-10">
            Welcome to ShopEase — Your Ultimate Shopping Destination
          </h1>
          <p className="max-w-xl mb-8 text-md sm:text-md  ">
            Discover amazing products, unbeatable deals, and fast delivery.
          </p>
          <a
            href="#products"
            className="bg-black hover:bg-white hover:text-black text-white font-semibold px-8 py-3  rounded shadow transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:pl-40 -mt-20">
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
