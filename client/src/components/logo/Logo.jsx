import React from "react";
import { BiLogoNetlify } from "react-icons/bi";

export const Logo = () => {
  return (
    <div className="flex text-2xl font-bold p-1 gap-2 items-center">
      <BiLogoNetlify className="text-blue-600 w-10 h-10" />
      Geld
    </div>
  );
};
