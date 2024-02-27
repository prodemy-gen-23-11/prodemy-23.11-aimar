import React, { useContext } from "react";
import { CoContext } from "../context/CoContext";

function Payment() {
  const { dataCo } = useContext(CoContext);
  console.log(dataCo);

  // const navigate = useNavigate();

  return (
    <section className="px-20">
      <h1 className="my-6 text-3xl font-semibold">Payment</h1>
      <div>
        <div>
          <p className="text-2xl">Your Bag</p>
          <hr />
          <div className="flex flex-col">
            <div className="flex justify-between my-4">
              <img src={dataCo.image[3]} alt={dataCo.name} className="w-16" />
              <p className="font-semibold">{dataCo.name}</p>
              <span>{dataCo.qty}</span>
              <span>{dataCo.price}</span>
            </div>
          </div>
          <hr />

          <div className="flex justify-between mt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold">{dataCo.qty * dataCo.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
