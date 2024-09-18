"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { LoadinDaisy } from "@/components";

export const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/confirm");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen justify-center gap-12 items-center flex-col">
      <div className="flex text-5xl font-bold p-1 gap-2 items-center">
        <img className="w-[48px] h-[48px]" src="./Vector.png" alt="Geld logo" />
        Geld
      </div>
      <LoadinDaisy />
      <p className="font-bold text-state-900 text-base">Түр хүлээнэ үү...</p>
    </div>
  );
};
