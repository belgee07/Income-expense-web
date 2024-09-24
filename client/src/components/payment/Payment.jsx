"use client";
import React, { useState } from "react";
import { Button, Logo } from "@/components";
import { PiMoneyBold } from "react-icons/pi";
import axios from "axios";

export const Payment = ({ next }) => {
  const [currency, setCurrency] = useState("MNT - Mongolian Tugrik");

  const currencyHandler = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };

  const handlerContinue = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8000/api/user/confirm",
        {
          currency: currency,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }

    next();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="pt-10 flex w-max-[240px] justify-center items-center flex-col gap-12">
        <Logo />
        <div className="flex  items-center">
          <div className="bg-blue-600 text-center text-white justify-center pt-1 h-8 w-8 rounded-full">
            <p>1</p>
            <p className="text-black flex mt-2 justify-center text-center">
              Currency
            </p>
          </div>
          <div className="flex w-[100px] bg-gray-400 h-1"></div>
          <div className="bg-gray-400 text-center text-black justify-center pt-1 h-8 w-8 rounded-full">
            <p>2</p>
            <p className="text-black flex mt-2 justify-center text-center">
              Balance
            </p>
          </div>
          <div className="flex w-[100px] bg-gray-400 h-1"></div>
          <div className="bg-gray-400 text-center text-black justify-center pt-1 h-8 w-8 rounded-full">
            <p>3</p>
            <p className="text-black flex mt-2 justify-center text-center">
              Finish
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[130px] flex items-center justify-center">
        <div className="w-full max-w-[384px] flex justify-center flex-col gap-6 items-center">
          <PiMoneyBold className="bg-blue-600 text-white rounded-full w-12 h-12" />
          <p className="text-2xl">Select base currency</p>

          <select
            onChange={currencyHandler}
            className="select select-bordered w-full h-[64px] bg-base-100 focus:outline-none border-base-300 font-bold rounded-lg"
          >
            <option>MNT - Mongolian Tugrik</option>
            <option>USD - USA Dollar</option>
          </select>

          <p className="text-slate-600 text-xs">
            Your base currency should be the one you use most often. All
            transactions in currencies will be calculated based on this one.
          </p>

          <Button
            handleClick={handlerContinue}
            color={"bg-blue-600"}
            text={"Continue"}
            textColor={"text-white"}
          />
        </div>
      </div>
    </div>
  );
};
