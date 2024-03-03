import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { setTokenAction, setUserAction } from "../store/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    password: yup.string().required("Password harus diisi"),
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

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        console.log("Res run");
        console.log(data);
        console.log(res);
        console.log(res.data);
        const { accessToken, user } = res.data;
        console.log(user);
        dispatch(setTokenAction(accessToken));
        dispatch(setUserAction(user));
        navigate("/");
        reset();
      })
      .catch((error) => {
        console.log("Error run");
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-4/5 px-8 py-4 bg-white rounded-md md:w-1/2 lg:w-1/3">
        <h1 className="mb-8 text-3xl font-bold text-center">Please login</h1>

        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xl">
              Email
            </label>
            <input
              placeholder="Email"
              type="email"
              id="email"
              className="w-full p-2 mt-1 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-400"
              {...register("email")}
            />
            <p className="mt-1 text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="password" className="block text-xl">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              className="w-full p-2 mt-1 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-400"
              {...register("password")}
            />
            <p className="mt-1 text-red-500">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className="w-full h-10 px-2 font-semibold text-white transition duration-200 bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
