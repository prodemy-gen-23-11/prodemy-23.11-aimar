import React from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

export default function ListPerfumes() {
  const parfum = [
    {
      id: 1,
      image: [
        "https://spaces.ilfen.co/assets/image/produk/EB918091-A5A3-4A3E-A0B9-0C46B23116BC.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/IMG-20230728-WA0037.jpg",
        "https://spaces.ilfen.co/assets/image/produk/IMG-20230728-WA0038.jpg",
        "https://spaces.ilfen.co/assets/image/produk/6DECB577-275A-487A-A539-4E824307DFF3.jpeg",
      ],
      name: "Exmood EDP",
      price: "Rp.175.000",
      sold: "41,210",
    },
    {
      id: 2,
      image: [
        "https://spaces.ilfen.co/assets/image/produk/3951EF16-6C5C-4C2F-B5FB-4BFBD96C42C1.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/EF551010-80D6-41F3-9AEA-7C69A6E8E4F3.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/ivry_1.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/4BD3EF48-A2AB-4E3D-B416-7BD3E3EC3A2D.jpeg",
      ],
      name: "Ivry EDP",
      price: "Rp.175.000",
      sold: "4,385",
    },
    {
      id: 3,
      image: [
        "https://spaces.ilfen.co/assets/image/produk/F4D35D62-0142-4BDF-A159-EDCF4E6B9813.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/2172BAFB-9CA3-4F94-8674-3A39C1A0E150.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/WhatsApp_Image_2022-11-05_at_20_26_41.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/C6D629C0-8A12-4CA7-A9A7-68E7E3740853.jpeg",
      ],
      name: "Calvary EDP",
      price: "Rp.175.000",
      sold: "4,919",
    },
    {
      id: 4,
      image: [
        "https://spaces.ilfen.co/assets/image/produk/117C19BA-8C22-4511-A1CB-D53FC800A0BD.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/AA1C7BF6-C2F8-4D74-9E4B-B8648894BA8B1.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/087A30BE-A6AE-4B98-9176-4F21A6C36678.jpeg",
        "https://spaces.ilfen.co/assets/image/produk/6AD961E7-013B-4C5D-B9E9-1F1F932A4EB1.jpeg",
      ],
      name: "Mauritz EDP",
      price: "Rp.175.000",
      sold: "2,130",
    },
  ];
  return (
    <div className="my-5 mx-20">
      <div>
        {parfum.map((perfumes) => (
          <ProductDetail key={perfumes.id} {...perfumes} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mx-auto">
        {parfum.map((perfumes) => (
          <ProductCard key={perfumes.id} {...perfumes} />
        ))}
      </div>
    </div>
  );
}
