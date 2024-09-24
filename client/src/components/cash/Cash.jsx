"use client";
import React, { useState } from "react";
import { Button, Input, Logo } from "@/components";
import { PiCoins } from "react-icons/pi";
import axios from "axios";

export const Cash = ({ next }) => {
  const [cash, setCash] = useState("");

  const handlerContinue = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8000/api/user/balance",
        {
          balance: cash,
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
          <div className="flex w-[100px] bg-blue-600 h-1"></div>
          <div className="bg-blue-600 text-center text-white justify-center pt-1 h-8 w-8 rounded-full">
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
          <PiCoins className="bg-blue-600 text-white w-12 h-12 rounded-full" />
          <p className="text-2xl">Set up your cash Balance</p>

          <Input
            type="text"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            placeholder="Cash"
          />

          <p className="text-slate-600 text-xs">
            How much cash do you have in your wallet?
          </p>

          <Button
            handleClick={handlerContinue}
            color="bg-blue-600"
            text="Continue"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};
