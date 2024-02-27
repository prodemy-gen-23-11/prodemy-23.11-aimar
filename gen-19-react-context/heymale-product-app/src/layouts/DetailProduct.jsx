import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { CoContext } from "../context/CoContext";
import { SyncLoader } from "react-spinners";

function DetailProduct(props) {
  const navigate = useNavigate();
  const { setDataCo } = useContext(CoContext);

  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(null);

  const incQty = () => setQty(qty + 1);
  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const { id } = props;

  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data: perfume, error } = useSWR(
    `http://localhost:3000/parfums/${id}`,
    fetcher
  );

  useEffect(() => {
    setMainImage(perfume?.image[3]);
  }, [perfume]);

  if (error) return <div>Something went wrong!</div>;
  if (!perfume) return <SyncLoader color="silver" />;

  const addToBag = () => {
    setDataCo({
      ...perfume,
      qty,
    });
    navigate("/payment");
  };

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className="relative h-full my-10" style={{ minHeight: "70vh" }}>
      <div className="flex flex-col w-full h-full py-4 lg:px-3">
        <div className="grid gap-6 mx-3 sm:grid-flow-row lg:grid-cols-2 lg:px-3">
          <div>
            <div className="flex justify-center">
              <div className="relative h-auto max-w-sm">
                <div>
                  <img
                    src={mainImage}
                    alt="image"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 my-4 rounded-lg">
              {perfume?.image.map((image, index) => (
                <div key={index}>
                  <img
                    className="w-20 h-auto rounded-lg cursor-pointer opacity-80"
                    src={image}
                    alt="small-image"
                    onClick={() => handleImageChange(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="px-3">
              <p className="text-2xl font-semibold text-gray-800">
                {perfume?.name}
              </p>
              <p>
                <span className="text-lg font-medium text-gray-800">
                  {perfume?.price}
                </span>
              </p>
              <p className="text-gray-400 font-medium text-[13px]">
                {perfume?.sold} sold
              </p>
            </div>
            <div className="flex flex-row mx-auto rounded-lg ">
              <button
                className="w-10 h-full text-2xl font-thin text-white bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                onClick={decQty}
              >
                -
              </button>
              <input
                type="number"
                className="flex items-center w-20 font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-gray-700 md:text-basecursor-default"
                name="qty"
                value={qty}
                disabled
              />
              <button
                className="w-10 h-full text-2xl font-thin text-white bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                onClick={incQty}
              >
                +
              </button>
            </div>
            <div className="float-left mt-1 mb-2">
              <button
                onClick={addToBag}
                className="block px-6 py-2 mx-auto text-white bg-gray-700 rounded-sm hover:bg-gray-500 hover:text-white focus:outline-none focus:shadow-outline"
              >
                Add to Bag
              </button>
            </div>
            <div className="mb-5 flex items-center w-full relative border-b-[1px] border-[#d8d8d848]">
              <div className="w-20 text-center h-9">Details</div>
              <div className="border-2 border-gray-800 h-[3px] w-20 absolute bottom-0 left-0"></div>
            </div>
            <div className="mb-5 text-[#717171]">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus inventore impedit omnis exercitationem quos eum
                magnam itaque, laborum, aperiam illum voluptas aspernatur
                recusandae. Praesentium vero, officia architecto obcaecati
                delectus amet?
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis quia incidunt temporibus quaerat explicabo, ratione
                tenetur voluptates nam natus iste aperiam voluptatum ea
                accusantium? Repudiandae voluptas modi molestias? Quod,
                laboriosam.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                veniam totam ducimus, nihil aut quasi, ratione hic, officiis
                voluptate earum perspiciatis modi temporibus deserunt quibusdam
                ad quo vel distinctio dicta. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Corrupti fugit voluptatum expedita
                voluptas ratione eligendi commodi asperiores tempore magnam,
                aspernatur exercitationem cumque similique! Vitae, excepturi
                magni. Dolorem maxime optio ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailProduct;
