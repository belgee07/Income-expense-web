"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo, Background, Button, Input } from "@/components";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { push } = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        { email, password }
      );

      // Assuming the response contains the JWT token
      localStorage.setItem("token", response.data.token); // Store JWT token
      console.log("Login successful:", response.data);

      push("/dashboard"); // Redirect to a protected route
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  const inputFields = [
    {
      type: "email",
      value: "email",
      placeholder: "Email",
      onChange: (e) => setEmail(e.target.value),
    },
    {
      type: "password",
      value: "password",
      placeholder: "Password",
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-6/12 bg-white flex gap-10 flex-col justify-center items-center">
        <Logo />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-base">Please enter your details to log in</p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[384px]">
          {inputFields.map((el, index) => (
            <Input
              type={el.type}
              key={index}
              value={el.value === "email" ? email : password}
              onChange={el.onChange}
              placeholder={el.placeholder}
            />
          ))}

          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <Button
            handleClick={handleLogin}
            color={"bg-blue-600"}
            text={"Log In"}
            textColor={"text-white"}
          />
        </div>

        <div className="flex gap-1">
          <p>Don’t have an account?</p>
          <Link className="text-blue-600" href="/signup">
            Sign Up
          </Link>
        </div>
      </div>

      <Background />
    </div>
  );
};
