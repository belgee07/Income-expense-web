import Link from "next/link";
import React from "react";
import { BiLogoNetlify } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] w-full flex items-center justify-between mx-auto p-4">
        <div className="flex gap-6 items-center">
          <BiLogoNetlify className="text-blue-600 w-[28px] h-[28px]" />
          <Link className="font-bold text-base" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-base" href="/records">
            Records
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          <button className="w-[100px] h-[32px] bg-blue-600 flex justify-center items-center text-white rounded-[20px]">
            + Record
          </button>
          <div className="avatar w-10 h-10">
            <div className="w-10 rounded-full overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
