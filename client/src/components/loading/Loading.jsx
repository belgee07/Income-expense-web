import React from "react";

export const Loading = () => {
  return (
    <div className="flex h-screen justify-center gap-12 items-center flex-col">
      <div className="flex text-5xl font-bold p-1 gap-2 items-center">
        <img className="w-[48px] h-[48px]" src="./Vector.png" alt="Geld logo" />
        Geld
      </div>
      <span className="w-8 h-8 bg-blue-600 loading loading-spinner text-info"></span>
      <p className="font-bold text-state-900 text-base">Түр хүлээнэ үү...</p>
    </div>
  );
};
