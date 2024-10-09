"use client";
import useProductsStore from "@/store/productsStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeartBroken } from "react-icons/fa";

const FavoriteProducts = () => {
  let [fav, setFav] = useState([]);
  let [counter, setCounter] = useState(0);
  let { favoriteProducts, addToCart, addToFav } = useProductsStore();
  useEffect(() => {
    setFav(favoriteProducts());
    setCounter(0);
  }, [counter]);

  return (
    <div className="mt-[120px] mb-10 container ">
      <h2 className="text-2xl  capitalize mb-10 border-l-4 pl-2 border-primary  ">
        your favorite products{" "}
        <span className=" text-primary font-bold">({fav.length})</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {fav.length > 0 ? (
          fav.map((item) => {
            return (
              <div className="group rounded-lg shadow-sm relative block overflow-hidden">
                <button
                  onClick={() => {
                    addToFav(item.id);
                    toast.success("Item Removed From Fav");
                    setCounter((prev) => prev + 1);
                  }}
                  className="absolute end-4 top-4 z-[5] rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>
                  <FaHeartBroken />
                </button>
                <Image
                  src={item.imgUrl}
                  width={300}
                  height={265}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">
                    {item.price} EGP
                  </span>

                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="my-1.5 text-lg text-gray-500">{item.size}</p>
                  <p className=" text-sm text-gray-700 line-clamp-3">
                    {item.description}
                  </p>

                  <form className="mt-4">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(item);
                        toast.success("item added to cart");
                      }}
                      className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Fav Products</h1>
        )}
      </div>
    </div>
  );
};

export default FavoriteProducts;
