import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import PaymentPage from "./pages/PaymentPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
