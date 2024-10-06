"use client";
import useProductsStore from "@/store/productsStore";
import ProductsCard from "./ProductsCard";

const ProductsSec = () => {
  let { Products } = useProductsStore();
  let productsMap = Products.map((item) => {
    return <ProductsCard item={item} />;
  });
  return (
    <div className="my-10">
      <h1 className="text-2xl mb-10 border-l-4 pl-2 border-primary  ">
        Our Latest Products
      </h1>
      <div className="space-y-5">
        {Products.length > 0 ? productsMap : <h1>No Products</h1>}
      </div>
    </div>
  );
};

export default ProductsSec;
