import React from "react";
import toRupiah from "../util/formatter";
import { useSelector } from "react-redux";

function Payment() {
  const { dataCo } = useSelector((state) => state.cart);
  console.log(dataCo);

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
        <p className="m-3 text-2xl text-center">Your Items</p>
      </div>
      {dataCo.length === 0 ? (
        <p>Bag is empty!</p>
      ) : (
        <div>
          {dataCo.map((item) => (
            <div key={item.id}>
              <hr />
              <div className="flex flex-col">
                <div className="flex justify-between my-4">
                  <img src={item.image[3]} alt={item.name} className="w-16" />
                  <p className="font-semibold">{item.name}</p>
                  <span>{item.qty}</span>
                  <span>{toRupiah(item.qty * item.price)}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold">{toRupiah(totalPrice())}</span>
          </div>
        </div>
      )}
      <div className="float-right mt-3 mb-2">
        <button className="block px-6 py-2 mx-auto text-white bg-gray-700 rounded-sm hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Payment;
