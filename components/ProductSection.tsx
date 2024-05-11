import { newArrivals } from "@/constants";
import ProductCard from "./ProductCard";

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
          <ProductCard
            name={product.name}
            price={product.price}
            img1={product.img1}
          />
        ))}
      </div>
    </div>
  );
}
