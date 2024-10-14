"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useProductsStore from "@/store/productsStore";
import { useState } from "react";
import toast from "react-hot-toast";
const AddProduct = () => {
  let { Products, addProduct } = useProductsStore();
  let [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: Products.length + 1,
    quantity: 1,
    title: "",
    description: "",
    price: "",
    category: "",
    size: "",
    imgUrl: null,
    favorite: false,
  });
  let handleAdd = (e) => {
    e.preventDefault();
    let data = {
      id: formData.id,
      quantity: formData.quantity,
      title: formData.title,
      description: formData.description,
      price: formData.price,
      category: formData.category,
      size: formData.size,
      imgUrl: URL.createObjectURL(formData?.imgUrl),
      favorite: formData.favorite,
    };
    addProduct(data);
    toast.success("item added successfully");
    setOpen(false);
  };
  let handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "imgUrl" ? files[0] : value,
    });
  };
  console.log(formData);
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-black text-white hover:bg-black/80">
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="title" className="text-right">
              Title
            </label>
            <input
              onChange={handleChange}
              required
              name="title"
              className="col-span-3 border border-slate-300 outline-none py-1 pl-2 rounded"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="description" className="text-right">
              Description
            </label>
            <textarea
              onChange={handleChange}
              required
              name="description"
              className="col-span-3 border h-[150px] resize-none border-slate-300 outline-none py-1 pl-2 rounded"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="price" className="text-right">
              Price
            </label>
            <input
              onChange={handleChange}
              required
              name="price"
              className="col-span-3 border border-slate-300 outline-none py-1 pl-2 rounded"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="size" className="text-right">
              Size
            </label>
            <select
              onChange={handleChange}
              required
              name="size"
              className="col-span-3 border border-slate-300 outline-none py-1 pl-2 rounded">
              <option disabled selected>
                Choose
              </option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="category" className="text-right">
              category
            </label>
            <select
              onChange={handleChange}
              required
              name="category"
              className="col-span-3 border border-slate-300 outline-none py-1 pl-2 rounded">
              <option disabled selected>
                Choose
              </option>
              <option>Men</option>
              <option>Women</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="imgUrl" className="text-right">
              Img
            </label>
            <input
              onChange={handleChange}
              required
              name="imgUrl"
              type="file"
              className="col-span-3 border border-slate-300 outline-none py-1 pl-2 rounded"
            />
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={handleAdd}
            className="bg-primary py-2 px-6 rounded-lg text-white"
            type="submit">
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
