import React, { useContext } from "react";
import { CoContext } from "../context/CoContext";
import toRupiah from "../util/formatter";

function Payment() {
  const { dataCo } = useContext(CoContext);
  console.log(dataCo);

  return (
    <div>
      {dataCo.length === 0 ? (
        <p>Bag is empty!</p>
      ) : (
        <div>
          {dataCo.map((item) => (
            <div key={item.id}>
              <hr />
              <div className="flex flex-col">
                <div className="flex justify-between my-4">
                  <img src={item.image?.[3]} alt={item.name} className="w-16" />
                  <p className="font-semibold">{item.name}</p>
                  <span>{item.qty}</span>
                  <span>{toRupiah(item.price)}</span>
                </div>
              </div>
              <hr />
              <div className="flex justify-between mt-4">
                <span className="font-bold">Total</span>
                <span className="font-bold">
                  {toRupiah(item.qty && item.price ? item.qty * item.price : 0)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Payment;
