"use client";
import React, { useState } from "react";
import { Button, Input, Logo } from "@/components";
import { PiCoins } from "react-icons/pi";

export const Cash = ({ next }) => {
  const [email, setEmail] = useState("");
  const handlerContinue = () => {
    if (next) next();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="pt-10 flex w-max-[240px] justify-center items-center flex-col gap-12">
        <Logo />
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step text-sm step-primary">Currency</li>
          <li className="step text-sm step-primary">Balance</li>
          <li className="step text-sm">Finish</li>
        </ul>
      </div>
      <div className="pt-[130px] flex items-center justify-center">
        <div className="w-full max-w-[384px] flex justify-center flex-col gap-6 items-center">
          <PiCoins className="bg-blue-600 text-white w-12 h-12 rounded-full" />
          <p className="text-2xl">Set up your cash Balance</p>

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
