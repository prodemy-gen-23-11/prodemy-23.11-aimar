import React from "react";

function BreadCrumbs() {
  return (
    <div className="breadcrumbs p-3 flex justify-start items-center flex-wrap">
      <span className="home font-light text-gray-400 mr-2">
        <a href="https://heymale.id/">HOME</a>
      </span>
      <span>/</span>
      <span className="text-gray-800 font-light ml-2">Perfumes</span>
    </div>
  );
}

export default BreadCrumbs;
