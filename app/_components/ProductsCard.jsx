import useProductsStore from "@/store/productsStore";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaListUl } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductsCard = ({ item }) => {
  let { addToCart } = useProductsStore();
  let handleAddToCart = () => {
    addToCart(item);
    toast.success("item added to cart");
  };
  return (
    <article className="flex relative flex-col hover:-translate-y-2.5 transition-all duration-300 sm:flex-row border rounded-lg overflow-hidden">
      <Link
        href={`/Product/${item.id}`}
        className="h-[300px] sm:h-auto block sm:basis-56">
        <Image
          src={item.imgUrl}
          alt=""
          className="aspect-square h-full w-full object-cover"
        />
      </Link>
      <div className="absolute top-4 cursor-pointer hover:bg-primary transition-all duration-300 group  right-4 size-8 bg-white rounded-full border grid place-items-center ">
        <MdOutlineFavoriteBorder className="text-primary transition-all duration-300 group-hover:text-white" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">{item.title}</h3>
          </a>

          <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
            {item.description}
          </p>

          <p className="my-2 text-sm font-bold text-gray-900">
            {item.price} EGP
          </p>
          <div className="flex items-center gap-2">
            <FaListUl color="#f15757" size={15} />
            <small>{item.category}</small>
          </div>
          <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
            {item.size}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <button
            onClick={handleAddToCart}
            className="block bg-primary w-full sm:w-fit py-2 sm:px-5 sm:py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-red-500">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductsCard;
