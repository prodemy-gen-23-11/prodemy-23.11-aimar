import React from "react";
import AddToBagButton from "./AddtoBag";

function ProductCard({ parfum, onClick }) {
  return (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer "
      onClick={onClick}
    >
      <img
        src={parfum.image[3]}
        alt={parfum.name}
        className="w-44 h-auto rounded-lg mx-auto"
      />
      <h3 className="text-xl font-semibold text-gray-800 mt-2">
        {parfum.name}
      </h3>
      <p className="text-gray-800">{parfum.price}</p>
      <p className="text-gray-400">{parfum.sold} sold</p>
      <AddToBagButton />
    </div>
  );
}

export default ProductCard;
