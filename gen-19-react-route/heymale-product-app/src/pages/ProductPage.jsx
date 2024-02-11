import React from "react";
import { useParams } from "react-router-dom";
import { parfum } from "../data/PerfumeData";
import Header from "../layouts/Header";
import BreadCrumbs from "../components/Breadcrumbs";
import DetailProduct from "../layouts/DetailProduct";

function ProductPage() {
  const { id } = useParams();
  const product = parfum.find((parfum) => parfum.id === parseInt(id));
  return (
    <div>
      <Header />
      <BreadCrumbs />
      <DetailProduct parfum={product} />
    </div>
  );
}

export default ProductPage;
