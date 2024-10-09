"use client";
import useProductsStore from "@/store/productsStore";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

const SideMenuCart = ({ setOpenCart }) => {
  let { cart } = useProductsStore();

  return (
    <div className="absolute top-[81px] right-0">
      <div
        className="relative w-screen max-w-sm h-screen overflow-y-auto shadow bg-white px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1">
        <button className="absolute end-4 top-4 transition hover:scale-110">
          <span className="sr-only">Close cart</span>
          <IoIosCloseCircle
            onClick={() => setOpenCart(false)}
            className=" text-primary"
            size={22}
          />
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => {
                return (
                  <li key={item?.id} className="flex items-center gap-4">
                    <Image
                      width={64}
                      height={64}
                      src={item?.imgUrl}
                      alt={item?.title}
                      className=" rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">{item?.title}</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Size: </dt>
                          <dd className="inline">{item?.size}</dd>
                        </div>

                        <div>
                          <dt className="inline">Category: </dt>
                          <dd className="inline">{item?.category}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <label htmlFor="Line1Qty" className="sr-only">
                          {item?.quantity}
                        </label>

                        <input
                          type="number"
                          min="1"
                          value={item?.quantity}
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                      </form>

                      <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <p className="text-center text-lg">No items in cart</p>
            )}
            {cart.length > 0 && (
              <li style={{ marginBottom: "80px" }} className="text-center ">
                <Link
                  href="/cartpage"
                  className="block rounded border  px-5 py-3 text-sm transition-all duration-300 bg-primary text-white hover:scale-105 ">
                  View my cart ({cart.length})
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenuCart;
