import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import BreadCrumbs from "../components/Breadcrumbs";
import { parfum } from "../data/PerfumeData";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const navigate = useNavigate();
  const Redirect = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      <Header />
      <BreadCrumbs />
      <div className="grid gap-6  m-5 sm: grid-cols-2  lg:grid-cols-6 ">
        {parfum.map((item) => (
          <ProductCard
            parfum={item}
            key={item.id}
            onClick={() => Redirect(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
