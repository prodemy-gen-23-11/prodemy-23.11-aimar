import React from "react";
import AddToBagButton from "../components/AddtoBag";

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
      <p className="text-gray-800">{parfum.price}</p>
      <p className="mb-2 text-gray-400">{parfum.sold} sold</p>
      <AddToBagButton />
    </div>
  );
}

export default ProductCard;
