import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import { CoProvider } from "./context/CoContext";
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <div>
      <CoProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </CoProvider>
    </div>
  );
}

export default App;
