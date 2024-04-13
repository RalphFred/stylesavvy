"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const OpenMenu = () => {
    setIsOpenMenu(true);
  };

  const CloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <nav className="flex lg:hidden justify-between px-4 py-2 relative ">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={45}
          height={45}
          className="mr-1"
        />
      </Link>

      <div className="flex items-center">
        <Link href="/wishlist" className="mr-6">
          <Image src="/images/search.svg" alt="search" width={25} height={25} />
        </Link>
        <Link href="/cart" className="mr-6">
          <Image src="/images/cart.svg" alt="cart" width={25} height={25} />
        </Link>
        <Link href="/accounts" className="mr-6">
          <Image src="/images/user.svg" alt="user" width={25} height={25} />
        </Link>
        <div onClick={OpenMenu}>
          <Image src="/images/menu.svg" alt="menu" width={25} height={25} />
        </div>
      </div>
      <div
        className={`absolute top-0  w-screen h-screen backdrop-blur-sm z-10 flex justify-end duration-300 ${
          isOpenMenu ? "left-0" : "left-[100%]"
        }`}
      >
        <div className="w-4/5 h-full bg-white">
          <div className="h-[71.31px] pr-4 flex justify-end items-center" onClick={CloseMenu}>
            <Image src="/images/close.svg" alt="menu" width={25} height={25} />
          </div>
        </div>
      </div>
    </nav>
  );
}
