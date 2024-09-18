"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Background from "../background/Background";
import Button from "../button/Button";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    if (password !== rePassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/signup",
        {
          username,
          password,
          email,
        }
      );
      alert("Registration successful!");
      console.log("Registration successful:", response.data);
      router.push("/login");
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-6/12 bg-white flex gap-10 flex-col justify-center items-center">
        <div className="flex text-2xl font-bold p-1 gap-2 items-center">
          <img
            className="w-[23px] h-[23px]"
            src="./Vector.png"
            alt="Geld logo"
          />
          Geld
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">Create Geld account</h1>
          <p className="text-base">
            Sign up below to create your Wallet account
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[384px]">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            className="input input-bordered rounded-lg bg-base-100 focus:outline-none w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered rounded-lg bg-base-100 focus:outline-none w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered rounded-lg bg-base-100 focus:outline-none w-full"
          />
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Re-enter Password"
            className="input input-bordered rounded-lg bg-base-100 focus:outline-none  w-full"
          />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <Button
            handleClick={handleRegister}
            color={"bg-blue-600"}
            text={"Sign Up"}
            textColor={"text-white"}
            hoverColor={"text-blue-600"}
          />
        </div>

        <div className="flex gap-1">
          <p>Already have an account?</p>
          <Link className="text-blue-600 hover:text-blue-700" href="/login">
            Log In
          </Link>
        </div>
      </div>

      <Background />
    </div>
  );
};
