import React from "react";

const Navbar = () => {
  return (
    <div className="transition duration-100 ease-in-out flex justify-between h-16 px-3 items-center text-black bg-white">
    <div className="flex gap-16 items-center">
      <div className="flex gap-4 items-center">
        <img
          src="https://heymale.id/assets/burger-black-75ca1788.svg"
          alt="sidemenu"
          className="w-6 h-6 cursor-pointer md:hidden lg:hidden"
        />
        <img
          src="https://heymale.id/assets/heymale-50ba8d2d.png"
          alt="logo"
          className="w-full max-w-[140px] cursor-pointer"
        />
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
                className="mt-1 h-3 w-3 rotate-0"
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
          <img
            className="w-6 h-6 cursor-pointer"
            src="https://heymale.id/assets/bag-black-ba36e404.svg"
            alt="bag"
          />
        </div>
    </div>
  );
};
export default Navbar;
