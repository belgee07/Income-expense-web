"use client";
import { IoArrowUpOutline } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { Chip, Balance, Chart } from "@/components";

export const Dashboard = () => {
  return (
    <div className="max-w-[1200px] w-full h-[220px] flex items-center justify-between mx-auto p-4">
      <Balance />

      <Chip text={"Expense"} color={"green"} icon={IoArrowUpOutline} />
      <Chip text={"Income"} color={"blue"} icon={IoMdArrowDown} />
    </div>
  );
};
