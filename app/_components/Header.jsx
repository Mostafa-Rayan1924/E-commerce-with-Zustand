"use client";
import useProductsStore from "@/store/productsStore";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import SideMenuCart from "./SideMenuCart";
import { useEffect, useState } from "react";

const Header = () => {
  let { cart } = useProductsStore();
  let [openCart, setOpenCart] = useState(false);

  return (
    <div className="py-5 shadow-sm fixed inset-0 w-full bg-white h-[80px] grid place-items-center z-10 shadow-primary/30">
      <div className="container flex items-center gap-2 justify-between">
        <Link href={"/"}>
          <Image
            height={100}
            width={150}
            className="w-[150px]"
            alt="logo"
            src="/logo.svg"
          />
        </Link>
        <ul className="flex items-center gap-3 sm:gap-8 ">
          <li
            onClick={() => setOpenCart(!openCart)}
            className="relative cursor-pointer">
            <small className="bg-primary absolute  right-[-8px] top-[-15px] text-[12px] w-5 h-5 rounded-full flex items-center justify-center text-white">
              {cart?.length}
            </small>
            <FaCartShopping size={25} />
          </li>
          {openCart && <SideMenuCart setOpenCart={setOpenCart} />}
          <Link
            href={"/favoriteproducts"}
            className="border-b-2 font-bold border-primary border-dotted">
            Favourites
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
