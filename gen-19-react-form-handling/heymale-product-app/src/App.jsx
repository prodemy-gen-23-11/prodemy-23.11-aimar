import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Admin from "./pages/admin/AdminPage";
import FormPage from "./pages/admin/FormPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<ProductPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/addNew" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
