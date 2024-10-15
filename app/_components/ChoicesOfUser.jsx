"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useProductsStore from "@/store/productsStore";
import toast from "react-hot-toast";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const ChoicesOfUser = ({ item }) => {
  let { deleteItem } = useProductsStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HiDotsVertical size={22} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            deleteItem(item.id);
            toast.success("item deleted successfully");
          }}
          className="flex gap-1 -ml-1 items-center justify-start ">
          <MdDelete size={20} color="red" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChoicesOfUser;
