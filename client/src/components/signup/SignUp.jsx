"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Background, Button, Input, Logo } from "@/components";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password || !username || !rePassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

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
  const inputFields = [
    {
      type: "username",
      value: "username",
      placeholder: "Username",
      onChange: (e) => setUsername(e.target.value),
    },
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
    {
      type: "password",
      value: "rePassword",
      placeholder: "Re-enter Password",
      onChange: (e) => setRePassword(e.target.value),
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-6/12 bg-white flex gap-10 flex-col justify-center items-center">
        <Logo />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">Create Geld account</h1>
          <p className="text-base">
            Sign up below to create your Wallet account
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[384px]">
          {inputFields.map((el, index) => (
            <Input
              key={index}
              type={el.type}
              value={
                el.value === "email"
                  ? email
                  : el.value === "password"
                  ? password
                  : el.value === "rePassword"
                  ? rePassword
                  : username
              }
              onChange={el.onChange}
              placeholder={el.placeholder}
            />
          ))}
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
