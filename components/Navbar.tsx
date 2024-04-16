import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-16 py-2 hidden lg:flex justify-between items-center">
      <Link href="/" className=" flex items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="mr-1"
        />
        <span className="font-semibold text-3xl">StyleSavvy</span>
      </Link>

      <div className="flex items-center">
        <div className="mr-8 relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-100 px-4 py-2 outline-none rounded-lg w-[350px]"
          />
          <button className="absolute top-0 right-0 cursor-pointer p-2 bg-slate-200 rounded-r-lg">
            <Image
              src="/images/search.svg"
              alt="search"
              width={24}
              height={24}
              className=""
            />
          </button>
        </div>
        <Link href="/wishlist" className="mr-8">
          <Image
            src="/images/wishlist.svg"
            alt="wishlist"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/cart" className="mr-8">
          <Image src="/images/cart.svg" alt="cart" width={30} height={30} />
        </Link>
        <Link href="/accounts">
          <Image src="/images/user.svg" alt="user" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
}
