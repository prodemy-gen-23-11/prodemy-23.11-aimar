import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalItems } = useSelector((state) => state.cart);
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
        <img
          className="w-6 h-6 cursor-pointer"
          src="https://heymale.id/assets/person-black-322902d6.svg"
          alt="profile"
        />
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
