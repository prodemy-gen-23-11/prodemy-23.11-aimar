import React from "react";
import toRupiah from "../util/formatter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delFromCart } from "../store/cartSlice";

function Payment() {
  const { dataCo } = useSelector((state) => state.cart);
  console.log(dataCo);

  const dispatch = useDispatch();
  const handleRemove = (itemId) => {
    dispatch(delFromCart(itemId));
  };
  const totalPrice = () => {
    let tPrice = 0;
    dataCo.forEach((item) => {
      tPrice += item.qty * item.price;
    });
    return tPrice;
  };

  return (
    <div className="px-20">
      <div>
        <h1 className="my-6 text-3xl font-semibold">Payment</h1>
        <div className="flex justify-items-center place-content-center">
          <p className="m-3 text-2xl">Your Items</p>
        </div>
      </div>
      {dataCo.length === 0 ? (
        <p>Bag is empty!</p>
      ) : (
        <div>
          {dataCo.map((item) => (
            <div key={item.id}>
              <hr />
              <div className="flex flex-col">
                <div className="flex items-center justify-between my-4">
                  <img src={item.image[3]} alt={item.name} className="w-16" />
                  <p className="font-semibold">{item.name}</p>
                  <span>{item.qty}</span>
                  <button
                    className="p-2 text-white bg-red-700 rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    onClick={() => handleRemove(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-5 h-5 mr-1 align-middle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    Delete
                  </button>

                  <span>{toRupiah(item.qty * item.price)}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <span className="mr-3 font-bold">Total:</span>
            <span className="font-bold">{toRupiah(totalPrice())}</span>
          </div>
        </div>
      )}
      <div className="float-left mt-3 mb-2">
        <p>
          <Link to="/">
            <button className="block px-6 py-2 text-white bg-gray-700 rounded-sm hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
      <div className="float-right mt-3 mb-2">
        <button className="block px-6 py-2 mx-auto text-white bg-gray-700 rounded-sm hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Payment;