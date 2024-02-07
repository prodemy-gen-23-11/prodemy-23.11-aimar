import React from "react";
import AddToBagButton from "./AddtoBag";

function ProductCard(props) {
    const { name, price, image, sold} = props;
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg ">
        <img src={image} alt={name} className="w-44 h-auto rounded-lg mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-2">{name}</h3>
        <p className="text-gray-800">{price}</p>
        <p className="text-gray-400">{sold} sold</p>
      <AddToBagButton />
      </div>
    );
  }

  export default ProductCard;