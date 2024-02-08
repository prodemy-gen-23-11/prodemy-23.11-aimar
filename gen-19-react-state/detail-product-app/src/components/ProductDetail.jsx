import React, { useState } from "react";
import AddToBagButton from "./AddtoBag";

//masih ada error terkait data yang diambil
function ProductDetail(props) {
  const { name, price, image, sold } = props;

  const [mainImage, setMainImage] = useState(image[0]);

  const handleImageChange = (url) => {
    setMainImage(url);
  };

  return (
    <div
      className="relative h-full mb-8 mt-[72px]"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-full h-full bg-gray-200 shadow-lg rounded-md flex flex-col py-4 lg:px-3">
        <div className="grid gap-6 sm:grid-flow-row lg:grid-cols-2 lg:px-3 mx-3">
          <div>
            <div className="flex justify-center">
              {image.map((image, index) => (
                <div key={index} className="max-w-sm h-auto relative">
                  <div>
                    <img
                      src={image}
                      alt="image"
                      className="w-full h-auto rounded-lg"
                      style={{
                        display: mainImage === index ? "block" : "none",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4 my-4 rounded-lg">
              {image.map((image, index) => (
                <div key={index}>
                  <img
                    className="rounded-lg opacity-80 cursor-pointer"
                    src={image}
                    alt="small-image"
                    onClick={() => handleImageChange(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="px-3">
              <p className="text-gray-800 text-2xl font-semibold">{name}</p>
              <p>
                <span className="text-gray-800 font-medium text-lg">
                  {price}
                </span>
              </p>
              <p className="text-gray-400 font-medium text-[13px] mb-2">
                {sold} sold
              </p>
            </div>
            <div>
              <AddToBagButton />
            </div>
            <div className="mb-5 flex items-center w-full relative border-b-[1px] border-[#d8d8d848]">
              <div className="w-20 h-9 text-center">Details</div>
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

export default ProductDetail;
