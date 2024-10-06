import { items } from "@/app/_components/items";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  Products: items,
}));
export default useProductsStore;
