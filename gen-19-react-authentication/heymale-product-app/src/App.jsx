import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import PaymentPage from "./pages/PaymentPage";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login";
import GuestRoutes from "./components/route/GuestRoutes";
import UserRoutes from "./components/route/UserRoutes";
import AdminRoutes from "./components/route/AdminRoutes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<UserRoutes />}>
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<ProductPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
