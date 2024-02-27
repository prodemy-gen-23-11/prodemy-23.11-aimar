import React from "react";
import toRupiah from "../util/formatter";

function ProductCard({ parfum, onClick }) {
  return (
    <div
      className="p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer "
      onClick={onClick}
    >
      <img
        src={parfum.image[3]}
        alt={parfum.name}
        className="h-auto mx-auto rounded-lg w-44"
      />
      <h3 className="mt-2 text-xl font-semibold text-gray-800">
        {parfum.name}
      </h3>
      <p className="text-gray-800">{toRupiah(parfum.price)}</p>
      <p className="mb-2 text-gray-400">{parfum.sold} sold</p>
      <button className="block px-6 py-2 mx-auto text-gray-800 bg-white rounded-full hover:bg-gray-800 hover:text-white focus:outline-none focus:shadow-outline">
        View Product
      </button>
    </div>
  );
}

export default ProductCard;
