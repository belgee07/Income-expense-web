import Link from "next/link";
import React from "react";
import { BiLogoNetlify } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="w-max-[1200px] w-full flex justify-center">
      <div className="flex gap-6 items-center">
        <BiLogoNetlify className="text-blue-600 w-[28px] h-[28px]" />
        <Link className="font-bold text-base" href="/">
          Dashboard
        </Link>
        <Link className="text-base" href="/records">
          Records
        </Link>
      </div>

      <div></div>
    </div>
  );
};
