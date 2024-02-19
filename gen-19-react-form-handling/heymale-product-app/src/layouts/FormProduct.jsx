import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function FormProduct() {
  const schema = yup.object().shape({
    name: yup.string().required("field is required"),
    price: yup.string().required("field is required"),
    sold: yup.string().required("field is required"),
    image: yup.string().required("field is required"),
    preview: yup.string().required("field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);

    const previewsArray = data.previews.split("\n");
    console.log(previewsArray);
  };

  useEffect(() => window.scrollTo(0, 0));

  return (
    <div>
      <div className="m-auto">
        <h1 className="text-3xl font-bold text-center ">Add New Product</h1>
      </div>
      <div className="w-4/5 px-8 pt-2 pb-4 mx-auto mt-4 bg-gray-800 rounded-lg place-items-center">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="my-4 text-gray-200">
            <label htmlFor="name" className="text-xl">
              Name
            </label>
            <input
              placeholder="Name"
              type="text"
              id="name"
              className="w-full p-2 mt-1 text-lg border-2 border-gray-200 rounded-lg focus:outline-sky-400"
              {...register("name")}
            />
            <p className="my-1 text-red-500 error">{errors.name?.message}</p>
          </div>

          <div className="my-4 text-gray-200">
            <label htmlFor="price" className="text-xl">
              Price
            </label>
            <input
              placeholder="Product Price"
              type="text"
              id="price"
              className="w-full p-2 mt-1 text-lg border-2 border-gray-200 rounded-lg focus:outline-sky-400"
              {...register("price")}
            />
            <p className="my-1 text-red-500 error">{errors.price?.message}</p>
          </div>

          <div className="my-4 text-gray-200">
            <label htmlFor="sold" className="text-xl">
              Sold
            </label>
            <input
              placeholder="Current Sold"
              type="text"
              id="sold"
              className="w-full p-2 mt-1 text-lg border-2 border-gray-200 rounded-lg focus:outline-sky-400"
              {...register("sold")}
            />
            <p className="my-1 text-red-500 error">{errors.sold?.message}</p>
          </div>

          <div className="my-4 text-gray-200">
            <label htmlFor="image" className="text-xl">
              Image Source
            </label>
            <textarea
              placeholder="Image Source"
              id="image"
              className="w-full h-40 p-2 mt-1 text-lg border-2 border-gray-200 rounded-lg focus:outline-sky-400"
              {...register("image")}
            ></textarea>
            <p className="my-1 text-red-500 error">{errors.image?.message}</p>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="block px-6 py-2 mx-auto my-4 text-gray-800 bg-white rounded-full cursor-pointer focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProduct;
