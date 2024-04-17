import { categories } from "@/constants";
import Image from "next/image";

export default function CategoriesSection() {
  return (
    <div className="px-4 md:px-12 lg:px-32 py-12">
      <h2 className="text-3xl font-semibold mb-8">Categories</h2>
      <div className="flex flex-wrap justify-between">
        {categories.map((category) => (
          <div key={category.name} className="mb-4">
            <div className="overflow-hidden">
              <Image
                src={category.imgUrl}
                alt={category.name}
                width={1000}
                height={1000}
                className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-fit cursor-pointer hover:scale-110 duration-300"
              />
            </div>
            <span className="font-semibold text-lg mt-4 block cursor-pointer">
              <span className="mr-1">{category.name}</span> &rarr;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
