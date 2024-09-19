import React from "react";
import { Logo } from "@/components";

const Confirm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-10 flex justify-center items-center flex-col gap-12">
        <Logo />
        <ul className="steps ">
          <li className="step step-info">Currency</li>
          <li className="step">Balance</li>
          <li className="step ">Finish</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Confirm;
