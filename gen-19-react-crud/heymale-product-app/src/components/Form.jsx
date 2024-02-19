import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function Form({
  title,
  handleSubmit,
  register,
  onSubmitForm,
  errors,
  handleClose,
}) {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="h-fit w-fit p-4 rounded-lg bg-gray-800 shadow-md">
        <form
          className="flex flex-col gap-4 mt-4 text-white"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">{title}</h2>
            <IoCloseOutline
              className="text-lg cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              className="w-full rounded-lg border-[1px] text-gray-800 border-gray-200 p-4 pe-12 text-sm focus:outline-gray-800"
              {...register("name")}
              id="name"
            />
            <p className="error">{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input
              placeholder="Price"
              className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12  text-gray-800 text-sm focus:outline-gray-800"
              {...register("price")}
              id="price"
            />
            <p className="error">{errors.price?.message}</p>
          </div>
          <div>
            <label htmlFor="sold">Sold</label>
            <input
              placeholder="Sold"
              className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12  text-gray-800 text-sm focus:outline-gray-800"
              {...register("sold")}
              id="sold"
            />
            <p className="error">{errors.sold?.message}</p>
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <textarea
              placeholder="Image Source"
              className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12  text-gray-800 text-sm focus:outline-gray-800"
              {...register("imsge")}
              id="image"
            />
            <p className="error">{errors.image?.message}</p>
          </div>

          <button
            className="rounded-lg text-gray-800 p-2 bg-white self-center w-full"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
