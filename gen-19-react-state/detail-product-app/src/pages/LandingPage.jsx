import React from "react";
import ListPerfumes from "../components/Perfumes";
import BreadCrumbs from "../components/BreadCrumbs";

function LandingPage() {
  return (
    <div>
      <BreadCrumbs />
      <ListPerfumes />
    </div>
  );
}

export default LandingPage;
