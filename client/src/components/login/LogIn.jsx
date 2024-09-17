"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://100.10.10.243:9191/api/auth/token",
        { username, password }
      );
      setSuccessMessage("Login successful!");
      console.log("Login successful:", response.data);
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.");
      console.error("Error logging in:", error);
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
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-base">Please enter your details to log in</p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[384px]">
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            className="input input-bordered bg-white w-full"
            aria-label="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered bg-white w-full"
            aria-label="Password"
          />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          <button
            onClick={handleLogin}
            className="btn bg-blue-600 w-full text-white"
          >
            Log In
          </button>
        </div>

        <div className="flex gap-1">
          <p>Don’t have an account?</p>
          <Link className="text-blue-600" href="/signup">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="bg-blue-600 w-6/12 h-full"></div>
    </div>
  );
};
