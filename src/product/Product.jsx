import React, { useState } from "react";
import ProductCard from "../productcard/Productcard";
import Pagination from "../pagination/Pagination";

// Sample products data, replace with your real data or API
const products = [
  {
    id: 1,
    name: "Blue Denim Jacket",
    description: "Trendy blue denim jacket for women",
    price: 45.99,
    image: "photos/p1.png",
    onSale: true,
  },
  {
    id: 2,
    name: "Leather Wallet",
    description: "Genuine leather wallet for men",
    price: 25.5,
    image: "photos/p2.png",
    onSale: false,
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Comfortable and stylish sneakers",
    price: 55.0,
    image: "photos/p2.png",
    onSale: false,
  },
  {
    id: 4,
    name: "Summer Hat",
    description: "Lightweight summer hat with UV protection",
    price: 15.99,
    image: "<photos/p2.png",
    onSale: true,
  },
  {
    id: 5,
    name: "Sunglasses",
    description: "Polarized sunglasses for outdoor activities",
    price: 30.0,
    image: "photos/p2.png",
    onSale: false,
  },
  {
    id: 6,
    name: "Backpack",
    description: "Durable backpack for everyday use",
    price: 40.99,
    image: "photos/p2.png",
    onSale: true,
  },
  {
    id: 7,
    name: "Casual T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 10.99,
    image: "photos/p2.png",
    onSale: false,
  },
  {
    id: 8,
    name: "Running Shorts",
    description: "Light and breathable running shorts",
    price: 20.5,
    image: "photos/p2.png",
    onSale: false,
  },
  {
    id: 9,
    name: "Wrist Watch",
    description: "Classic wrist watch with leather strap",
    price: 75.0,
    image: "photos/p2.png",
    onSale: true,
  },
  {
    id: 10,
    name: "Formal Shoes",
    description: "Elegant formal shoes for men",
    price: 80.99,
    image: "photos/p2.png",
    onSale: false,
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 py-10">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Products;
