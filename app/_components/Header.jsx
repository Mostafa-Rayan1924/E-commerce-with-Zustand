import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="py-5 shadow-sm shadow-primary/30">
      <div className="container flex items-center gap-2 justify-between">
        <Image
          height={100}
          width={150}
          className="w-[100px] sm:w-[150px]"
          alt="logo"
          src="/logo.svg"
        />
        <ul className="flex items-center gap-3 sm:gap-8 ">
          <li className="relative cursor-pointer">
            <small className="bg-primary absolute  right-[-8px] top-[-15px] text-[12px] w-5 h-5 rounded-full flex items-center justify-center text-white">
              0
            </small>
            <FaCartShopping size={25} />
          </li>
          <Link
            href={"/favourites"}
            className="border-b-2 font-bold border-primary border-dotted">
            Favourites
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
