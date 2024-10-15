import { items } from "@/app/_components/items";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductsStore = create(
  persist(
    (set, get) => ({
      Products: items,
      FilteredProducts: items,
      cart: [],
      productById: {},

      addToCart: (product) =>
        set((state) => {
          const isAlreadyInCart = state.cart.find(
            (item) => item.id === product.id
          );
          let updatedCart;

          if (isAlreadyInCart) {
            updatedCart = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            updatedCart = [...state.cart, { ...product, quantity: 1 }];
          }

          return {
            cart: updatedCart,
          };
        }),

      getProductById: (id) => {
        const filtered = get().Products.find((item) => item.id == Number(id));
        set({ productById: filtered });
      },

      searchByTitle: (title) =>
        set((state) => {
          if (title === "") {
            return {
              Products: state.FilteredProducts,
            };
          }

          const filtered = get().FilteredProducts.filter((item) =>
            item.title.toLowerCase().includes(title.toLowerCase())
          );
          return {
            Products: filtered,
          };
        }),

      searchBySize: (size) =>
        set((state) => {
          if (size === "All") {
            return {
              Products: state.FilteredProducts,
            };
          }
          const filtered = get().FilteredProducts.filter(
            (item) => item.size === size
          );
          return {
            Products: filtered,
          };
        }),

      addToFav: (id) =>
        set((state) => {
          const filtered = state.FilteredProducts.map((item) =>
            item.id === id ? { ...item, favorite: !item.favorite } : item
          );
          return {
            Products: filtered,
            FilteredProducts: filtered,
          };
        }),
      favoriteProducts: () => {
        return get().FilteredProducts.filter((item) => item.favorite);
      },
      deleteItem: (id) => {
        set((state) => {
          let filtered = state.FilteredProducts.filter((item) => item.id != id);
          console.log(filtered);
          return {
            FilteredProducts: filtered,
            Products: filtered,
          };
        });
      },
      deleteItemFromCart: (id) => {
        set((state) => {
          let filtered = state.cart.filter((item) => item.id != id);
          return {
            cart: filtered,
          };
        });
      },
      addProduct: (item) => {
        set((state) => {
          let addedItem = [...state.FilteredProducts, item];
          return {
            FilteredProducts: addedItem,
            Products: addedItem,
          };
        });
      },
    }),

    {
      name: "products-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProductsStore;
