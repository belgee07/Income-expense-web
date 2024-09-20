import React from "react";
import { Button, Logo } from "@/components";
import { PiMoneyBold } from "react-icons/pi";

export const Payment = ({ next }) => {
  const handlerContinue = () => {
    if (next) next();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="pt-10 flex w-max-[240px] justify-center items-center flex-col gap-12">
        <Logo />
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step text-sm  step-primary">Currency</li>
          <li className="step text-sm">Balance</li>
          <li className="step text-sm">Finish</li>
        </ul>
      </div>
      <div className="pt-[130px] flex items-center justify-center">
        <div className="w-full max-w-[384px] flex justify-center flex-col gap-6 items-center">
          <PiMoneyBold className="bg-blue-600 text-white rounded-full w-12 h-12" />
          <p className="text-2xl">Select base currency</p>

          <select className="select select-bordered w-full h-[64px] bg-base-100 focus:outline-none border-base-300 font-bold rounded-lg">
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
