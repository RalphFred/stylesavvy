import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="lg:w-[300px]">
      <Image
        src='/images/tops.png'
        alt="product name"
        width={1000}
        height={1000}
        className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-fit cursor-pointer hover:scale-105 duration-300"
      />
      <div className="text-sm h-[40px]">
        Stylish blue plaid shirt for men
      </div>
      <div>
      ₦15,000.00 NGN

      </div>
    </div>
  );
}
