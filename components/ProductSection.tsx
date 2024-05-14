import { newArrivals } from "@/constants";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductSection() {
  return (
    <div className="px-4 md:px-12 lg:px-32 py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Product</h2>
        <span className="font-semibold text-lg cursor-pointer">
          See All &rarr;
        </span>
      </div>

      <div className="flex justify-between">
        {newArrivals.map((product) => (
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
