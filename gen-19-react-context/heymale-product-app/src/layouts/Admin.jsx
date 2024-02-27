import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "../components/Form";
import { Link } from "react-router-dom";

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [parfumsId, setParfumsId] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().required("field is required"),
    price: yup.string().required("field is required"),
    sold: yup.string().required("field is required"),
    image: yup.string().required("field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fetcher = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/parfums",
    fetcher
  );

  const onClickAdd = () => {
    setShowModal(true);
    setModalTitle("Add Product");
  };

  const onClickEdit = (id) => {
    axios.get(`http://localhost:3000/parfums/${id}`).then((res) => {
      setValue("name", res.data.name);
      setValue("price", res.data.price);
      setValue("sold", res.data.sold);
      setValue("image", res.data.image);
      setModalTitle("Edit Product");
      setShowModal(true);
      setParfumsId(id);
    });
  };

  const onClickDelete = (id) => {
    axios.delete(`http://localhost:3000/parfums/${id}`).then(() => mutate());
  };

  const onSubmitModal = (data) => {
    console.log(data);

    if (modalTitle === "Add Product") {
      axios
        .post("http://localhost:3000/parfums", data)
        .then(() => {
          reset();
          setShowModal(false);
          mutate();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      axios
        .put(`http://localhost:3000/parfums/${parfumsId}`, data)
        .then(() => {
          reset();
          setShowModal(false);
          mutate();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">HEYMALE Admin Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex justify-center">
            <button
              onClick={onClickAdd}
              className=" my-2 bg-gray-800 rounded-lg p-2 m-2 text-white"
            >
              Add New Item
            </button>
            <button className=" my-2 bg-gray-800 rounded-lg p-2 m-2 text-white">
              <Link to="/">Home</Link>
            </button>

            {showModal && (
              <Form
                title={modalTitle}
                handleSubmit={handleSubmit}
                register={register}
                onSubmitForm={onSubmitModal}
                errors={errors}
                handleClose={() => {
                  setShowModal(false);
                  reset();
                }}
              />
            )}
          </div>
          <div className="flex justify-center">
            <div className="w-[50%] rounded-lg border p-4 mt-4">
              {data.map((item) => (
                <div
                  className="grid grid-cols-5 items-center gap-2"
                  key={item.id}
                >
                  <img
                    src={item.image[3]}
                    alt={item.name}
                    className="w-[60px]"
                  />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.sold}</p>
                  <div className="flex gap-4 text-white">
                    <button
                      className="bg-gray-800 rounded-lg p-2"
                      onClick={() => onClickEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-800 rounded-lg p-2"
                      onClick={() => onClickDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
