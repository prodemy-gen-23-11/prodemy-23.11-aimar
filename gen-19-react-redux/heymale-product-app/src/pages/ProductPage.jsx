import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import BreadCrumbs from "../components/Breadcrumbs";
import DetailProduct from "../layouts/DetailProduct";

function ProductPage() {
  const detail = useParams();

  return (
    <div>
      <Header />
      <BreadCrumbs />
      <DetailProduct id={detail.id} />
    </div>
  );
}

export default ProductPage;
