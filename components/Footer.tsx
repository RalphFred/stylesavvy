import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-black text-white px-4 lg:px-16 py-12 lg:pt-12 lg:pb-24 relative">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:w-[300px] mb-8 lg:mb-0">
          <h2 className="font-semibold text-2xl mb-4">Exclusive</h2>
          <span className="mb-4">Subscribe</span>
          <div className="mb-4">
            <span className="block mb-4">Get 10% off your first order</span>
            <div className="mr-4 relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 outline-none border-2 border-white bg-black rounded-lg w-full text-sm"
              />
              <button className="absolute top-0 right-2 cursor-pointer p-2 rounded-r-lg">
                <Image
                  src="/images/send.svg"
                  alt="search"
                  width={24}
                  height={24}
                  className=""
                />
              </button>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
              className="mr-4"
            />
            <Image
              src="/images/instagram.svg"
              alt="instagram"
              width={30}
              height={30}
              className="mr-4"
            />
            <Image
              src="/images/x.svg"
              alt="x"
              width={30}
              height={30}
              className="mr-4"
            />
            <Image
              src="/images/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-[300px] mb-8 lg:mb-0">
          <h2 className="font-semibold text-xl mb-4">Support</h2>
          <span className="mb-2">Support</span>
          <span className="mb-2">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="mb-2">exclusive@gmail.com</span>
          <span className="mb-2">+88015-88888-9999</span>
        </div>
        <div className="flex flex-col lg:w-[300px] mb-8 lg:mb-0">
          <h2 className="font-semibold text-xl mb-4">Account</h2>
          <span className="mb-2">My Account</span>
          <span className="mb-2">Login / Register</span>
          <span className="mb-2">Cart</span>
          <span className="mb-2">Wishlist</span>
          <span className="mb-2">Shop</span>
        </div>
        <div className="flex flex-col lg:w-[300px] lg:mb-0">
          <h2 className="font-semibold text-xl mb-4">Quick Links</h2>
          <span className="mb-2">Privacy Policy</span>
          <span className="mb-2">Terms of Use</span>
          <span className="mb-2">FAQ</span>
          <span className="mb-2">Contact</span>
        </div>
      </div>
      <span className="text-gray-400 absolute bottom-4 w-full text-center text-sm lg:text-base">&copy; Copyright StyleSavvy 2024. All right reserved</span>
    </section>
  );
}
