"use client";
import useProductsStore from "@/store/productsStore";
import Image from "next/image";
import { useEffect } from "react";
import toast from "react-hot-toast";
const ProductDetails = ({ params }) => {
  let { productById, getProductById, addToCart } = useProductsStore();
  useEffect(() => {
    getProductById(params?.proId);
  }, []);
  let handleAddToCart = () => {
    addToCart(productById);
    toast.success("item added to cart");
  };
  return (
    <div className="flex justify-center items-center min-h-screen mt-[100px] sm:mt-[40px] bg-gray-50">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* صورة المنتج */}
        <div className="md:w-1/2">
          <Image
            src={productById?.imgUrl}
            alt="Product Image"
            width={400}
            height={400}
            className="object-cover aspect-square h-full w-full"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="p-8 md:w-1/2">
          {/* عنوان المنتج */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {productById?.title}
          </h2>

          {/* سعر المنتج */}
          <div className="text-xl font-semibold text-primary mb-2">
            {productById?.price} EGP
          </div>

          {/* وصف المنتج */}
          <p className="text-gray-600 text-sm mb-6">
            {productById?.description}
          </p>

          {/* تفاصيل إضافية */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700">Size</h4>
              <p className="text-gray-900">{productById?.size}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700">Category</h4>
              <p className="text-gray-900">{productById?.category}</p>
            </div>
          </div>

          {/* زر شراء */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-red-400 text-white font-bold py-2 rounded transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
