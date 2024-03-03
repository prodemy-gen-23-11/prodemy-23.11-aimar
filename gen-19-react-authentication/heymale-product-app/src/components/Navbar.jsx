import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetAuthAction } from "../store/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);

  const [showFloatMenu, setShowFloatMenu] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const isAdmin = useSelector(
    (state) => isLoggedIn && state.auth.user.role === "admin"
  );

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickLogout = () => {
    dispatch(resetAuthAction());
    navigate("/login");
  };

  const onClickRedirectAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="flex items-center justify-between h-16 px-3 text-black transition duration-100 ease-in-out bg-white">
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-4">
          <img
            src="https://heymale.id/assets/burger-black-75ca1788.svg"
            alt="sidemenu"
            className="w-6 h-6 cursor-pointer md:hidden lg:hidden"
          />
          <Link to="/">
            <img
              src="https://heymale.id/assets/heymale-50ba8d2d.png"
              alt="logo"
              className="w-full max-w-[140px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden md:flex lg:flex">
          <div className="flex gap-12">
            <div>
              <a href="#">
                <p className="text-[13px] uppercase">RAINY SEASON COLLECTION</p>
              </a>
            </div>
            <div>
              <a href="#">
                <p className="text-[13px] uppercase">AVAILABLE ITEMS</p>
              </a>
            </div>
            <div>
              <div className="flex gap-2 text-[13px] uppercase cursor-pointer">
                <span>COLLECTION</span>
                <img
                  className="w-3 h-3 mt-1 rotate-0"
                  src="https://heymale.id/assets/chevron-down-79b13f5e.svg"
                  alt="open"
                />
              </div>
            </div>
            <div>
              <a href="#">
                <p className="text-[13px] uppercase">ACCESSORIES</p>
              </a>
            </div>
            <a href="#">
              <p className="text-[13px] uppercase">Tracking Order</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          className="w-6 h-6 cursor-pointer"
          src="https://heymale.id/assets/search-black-c4d32415.svg"
          alt="search"
        />
        <div
          onClick={() => setShowFloatMenu(!showFloatMenu)}
          className="relative flex flex-row items-center mr-2 cursor-pointer group"
        >
          <img
            className="w-6 h-6 cursor-pointer"
            src="https://heymale.id/assets/person-black-322902d6.svg"
            alt="profile"
          />
          {showFloatMenu && (
            <>
              <div className="absolute right-0 z-50 w-auto max-w-sm py-2 bg-white border rounded-lg top-10 drop-shadow-md">
                <div className="flex flex-row items-center justify-between px-4">
                  {isLoggedIn ? (
                    <>
                      <p className="mb-2">Hello, {user.name}!</p>
                      <button
                        onClick={onClickLogout}
                        className="px-4 py-1 mx-2 duration-300 bg-red-700 rounded-lg text-zinc-50 hover:bg-red-500"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="mb-2">Login first!</p>
                      <button
                        onClick={onClickLogin}
                        className="px-4 py-1 mx-3 duration-300 bg-gray-800 rounded-lg text-zinc-50 hover:bg-gray-300"
                      >
                        Login
                      </button>
                    </>
                  )}
                </div>
                {isAdmin ? (
                  <div className="pt-2 text-center">
                    <button
                      onClick={onClickRedirectAdmin}
                      className="px-4 py-1 duration-300 bg-gray-800 rounded-lg text-zinc-50 hover:bg-gray-700"
                    >
                      Admin page
                    </button>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
        <Link to="/payment">
          <div className="relative">
            <img
              className="cursor-pointer w-7 h-7"
              src="https://heymale.id/assets/bag-black-ba36e404.svg"
              alt="bag"
            />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-gray-800 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
