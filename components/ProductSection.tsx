"use client"

// import { GetServerSideProps, NextPage } from 'next';
// import { fetchAllProducts } from '@/fetchData';

import { newArrivals } from "@/constants";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/fetchData";

interface Product {
  id: string;
  name: string;
  price: number;
  img1: string;
} 


export default function ProductSection() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {}
    }

    fetchData();
  }, [])

  return (
    <div className="px-4 md:px-12 lg:px-32 py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Product</h2>
        <span className="font-semibold text-lg cursor-pointer">
          See All &rarr;
        </span>
      </div>

      <div className="flex justify-between">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
          >
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              img1={product.img1}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
