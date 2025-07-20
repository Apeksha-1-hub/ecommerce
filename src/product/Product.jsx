import React, { useState } from "react";
import ProductCard from "../productcard/Productcard";
import Pagination from "../pagination/Pagination";

export const products = [
  {
    id: 1,
    name: "Blue Denim Jacket",
    description: "Trendy blue denim jacket for women",
    price: 800,
    image: "photos/p1.png",
    onSale: true,
  },
  {
    id: 2,
    name: "Leather Wallet",
    description: "Genuine leather wallet for men",
    price: 500,
    image: "photos/p2.png",
    onSale: false,
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Comfortable and stylish sneakers",
    price: 5000,
    image: "photos/p3.png",
    onSale: false,
  },
  {
    id: 4,
    name: "Summer Hat",
    description: "Lightweight summer hat with UV protection",
    price: 799,
    image: "photos/p4.png",
    onSale: true,
  },
  {
    id: 5,
    name: "Sunglasses",
    description: "Polarized sunglasses for outdoor activities",
    price: 1150,
    image: "photos/p5.png",
    onSale: false,
  },
  {
    id: 6,
    name: "Backpack",
    description: "Durable backpack for everyday use",
    price: 2000,
    image: "photos/p6.png",
    onSale: true,
  },
  {
    id: 7,
    name: "Casual T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 999,
    image: "photos/p7.png",
    onSale: false,
  },
  {
    id: 8,
    name: "Running Shorts",
    description: "Light and breathable running shorts",
    price: 1299,
    image: "photos/p8.png",
    onSale: false,
  },
  {
    id: 9,
    name: "Wrist Watch",
    description: "Classic wrist watch with leather strap",
    price: 6000,
    image: "photos/p9.png",
    onSale: true,
  },
  {
    id: 10,
    name: "Formal Shoes",
    description: "Elegant formal shoes for men",
    price: 2999,
    image: "photos/p10.png",
    onSale: false,
  },
 
  {
    id: 11,
    name: "Sports Cap",
    description: "Breathable sports cap for outdoor workouts",
    price: 499,
    image: "photos/p10.png",
    onSale: false,
  },
  {
    id: 12,
    name: "Women's Handbag",
    description: "Elegant handbag for women",
    price: 2500,
    image: "photos/p10.png",
    onSale: true,
  },
  {
    id: 13,
    name: "Beanie",
    description: "Warm knitted beanie for winter",
    price: 699,
    image: "photos/p10.png",
    onSale: false,
  },
  {
    id: 14,
    name: "Loafers",
    description: "Casual loafers for men",
    price: 2200,
    image: "photos/p10.png",
    onSale: false,
  },
  {
    id: 15,
    name: "Yoga Pants",
    description: "Comfortable stretchable yoga pants",
    price: 1500,
    image: "photos/p10.png",
    onSale: true,
  },

  {
    id: 16,
    name: "Formal Shoes",
    description: "Elegant formal shoes for men",
    price: 2999,
    image: "photos/p10.png",
    onSale: false,
  },
 
  {
    id: 17,
    name: "Sports Cap",
    description: "Breathable sports cap for outdoor workouts",
    price: 499,
    image: "photos/p10.png",
    onSale: false,
  },
  {
    id: 18,
    name: "Women's Handbag",
    description: "Elegant handbag for women",
    price: 2500,
    image: "photos/p10.png",
    onSale: true,
  },
  {
    id: 19,
    name: "Beanie",
    description: "Warm knitted beanie for winter",
    price: 699,
    image: "photos/p10.png",
    onSale: false,
  },
  {
    id: 20,
    name: "Loafers",
    description: "Casual loafers for men",
    price: 2200,
    image: "photos/p10.png",
    onSale: false,
  },
  {
    id: 21,
    name: "Yoga Pants",
    description: "Comfortable stretchable yoga pants",
    price: 1500,
    image: "photos/p10.png",
    onSale: true,
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Our Products
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Explore our wide range of trendy fashion items and accessories
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Products;
