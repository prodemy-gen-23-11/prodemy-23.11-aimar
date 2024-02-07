import React from "react";
import exmood from "../assets/exmood.jpeg";
import ivry from "../assets/ivry.jpeg";
import calvary from "../assets/calvary.jpeg";
import mauritz from "../assets/mauritz.jpeg";
import ProductCard from "./ProductCard";

export default function ListPerfumes() {
  const parfum = [
    {
      id: 1,
      image: exmood,
      name: "Exmood EDP",
      price: "Rp.175.000",
      sold: "41,210",
    },
    {
      id: 2,
      image: ivry,
      name: "Ivry EDP",
      price: "Rp.175.000",
      sold: "4,385",
    },
    {
      id: 3,
      image: calvary,
      name: "Calvary EDP",
      price: "Rp.175.000",
      sold: "4,919",
    },
    {
      id: 4,
      image: mauritz,
      name: "Mauritz EDP",
      price: "Rp.175.000",
      sold: "2,130",
    },
  ];
  return (
    <div className="my-5 mx-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mx-auto">
        {parfum.map((perfumes) => (
          <ProductCard key={perfumes.id} {...perfumes} />
        ))}
      </div>
    </div>
  );
}
