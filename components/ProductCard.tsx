import { ProductCardProps } from "@/types";
import Image from "next/image";

export default function ProductCard({name, price, img1}: ProductCardProps) {
  return (
    <div className="lg:w-[300px]">
      <div className="overflow-hidden">
      <Image
        src={img1}
        alt="product name"
        width={1000}
        height={1000}
        className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-fit cursor-pointer hover:scale-105 duration-300 bg-slate-50"
      />
      </div>
      <div className="text-sm h-[40px] mt-2">{name}</div>
      <div className="font-semibold">{price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</div>
    </div>
  );
}
