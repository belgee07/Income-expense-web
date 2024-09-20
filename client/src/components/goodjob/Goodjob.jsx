import React from "react";
import { Button, Logo } from "@/components";
import { IoCheckmarkOutline } from "react-icons/io5";

export const Goodjob = ({ next }) => {
  const handlerContinue = () => {
    if (next) next();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="pt-10 flex w-max-[240px] justify-center items-center flex-col gap-12">
        <Logo />
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step text-sm  step-primary">Currency</li>
          <li className="step text-sm step-primary">Balance</li>
          <li className="step text-sm step-primary">Finish</li>
        </ul>
      </div>
      <div className="pt-[130px] flex items-center justify-center">
        <div className="w-full max-w-[384px] flex justify-center flex-col gap-6 items-center">
          <IoCheckmarkOutline className="bg-blue-600 text-white w-[48px] h-[48px] rounded-full" />
          <p className="text-2xl">Good Job!</p>

          <p className="text-slate-600  text-center text-base">
            Your very first account has been created. Now continue to dashboard
            and start tracking
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
