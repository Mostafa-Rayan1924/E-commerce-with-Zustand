import useProductsStore from "@/store/productsStore";
import { useEffect, useState } from "react";
import { items } from "./items";

const Search = () => {
  let { searchByTitle, searchBySize } = useProductsStore();
  let [options, setOptions] = useState([]);

  useEffect(() => {
    let filtered = ["All", ...new Set(items.map((item) => item.size))];
    setOptions(filtered);
  }, []);

  return (
    <div className="flex items-center mb-10 gap-2 flex-wrap">
      <div className="relative  flex-1">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          onChange={(e) => searchByTitle(e.target.value)}
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full rounded-md border-2 border-gray-200 outline-none py-2.5 pl-2  pe-10  sm:text-sm"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <select
        onChange={(e) => searchBySize(e.target.value)}
        className="w-[100px] text-sm py-2.5 text-gray-600 px-1 border-2 rounded-md border-gray-200 outline-none ">
        {options.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Search;
