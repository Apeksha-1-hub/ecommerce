import React, { useState } from "react";
import ProductCard from "../productcard/Productcard";
import Pagination from "../pagination/Pagination";


const products = [
  {
    id: 1,
    name: "Blue Denim Jacket",
    description: "Trendy blue denim jacket for women",
    price: 800 ,
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
