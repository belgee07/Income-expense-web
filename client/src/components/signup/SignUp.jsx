"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter(); // Initialize useRouter

  const handleRegister = async () => {
    if (password !== rePassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://100.10.10.243:9191/api/auth/register",
        {
          username,
          password,
          email,
        }
      );
      alert("Registration successful!");
      console.log("Registration successful:", response.data);
      router.push("/loading");
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
      console.error("Registration error:", error);
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
            className="input input-bordered bg-white w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered bg-white w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered bg-white w-full"
          />
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Re-enter Password"
            className="input input-bordered bg-white w-full"
          />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <button
            onClick={handleRegister}
            className="btn bg-blue-600 w-full text-white"
          >
            Sign up
          </button>
        </div>

        <div className="flex gap-1">
          <p>Already have an account?</p>
          <Link className="text-blue-600" href="/login">
            Log In
          </Link>
        </div>
      </div>

      <div className="bg-blue-600 w-6/12 h-full"></div>
    </div>
  );
};
