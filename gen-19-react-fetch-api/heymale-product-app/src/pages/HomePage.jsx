import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import BreadCrumbs from "../components/Breadcrumbs";
import ProductCard from "../layouts/ProductCard";
import axios from "axios";
import useSWR from "swr";

function HomePage() {
  const navigate = useNavigate();

  const Redirect = (id) => {
    navigate(`/detail/${id}`);
  };

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data: perfume } = useSWR("http://localhost:3000/parfums", fetcher);

  return (
    <div>
      <Header />
      <BreadCrumbs />
      <div className="grid gap-6  m-5 sm: grid-cols-2  lg:grid-cols-6 ">
        {perfume?.map((item) => (
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
