import { items } from "@/app/_components/items";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  Products: items,
  cart: [],
  productById: {},
  sizeOptions: "",
  initializeCart: () => {
    if (typeof window !== "undefined") {
      let getStoredItemInCart = JSON.parse(localStorage.getItem("cart")) || [];
      set({ cart: getStoredItemInCart });
    }
  },
  addToCart: (product) =>
    set((state) => {
      let addedItem = [...state.cart, product];
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(addedItem));
      }
      return {
        cart: addedItem,
      };
    }),
  getProudctById: (id) =>
    set((state) => {
      let filtered = items.find((item) => item.id == id);
      return {
        productById: filtered,
      };
    }),
  searchByTitle: (title) =>
    set((state) => {
      if (title == "") {
        return {
          Products: items,
        };
      }
      let filtered = state.Products.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      return {
        Products: filtered,
      };
    }),
  searchBySize: (size) =>
    set((state) => {
      if (size == "All") {
        return {
          Products: items,
        };
      }
      let filtered = state.Products.filter((item) => item.size == size);
      return {
        Products: filtered,
      };
    }),
}));
export default useProductsStore;
