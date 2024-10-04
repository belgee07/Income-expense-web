"use client";
import { IoArrowUpOutline } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { Chip, Balance, IncomeBar, LastRecord } from "@/components";

export const Dashboard = () => {
  return (
    <div className="max-w-[1200px] w-full h-[220px] flex items-center flex-col gap-4 mx-auto p-4">
      <div className="w-full flex gap-6">
        <Balance />

        <Chip text={"Expense"} color={"green"} icon={IoArrowUpOutline} />
        <Chip text={"Income"} color={"blue"} icon={IoMdArrowDown} />
      </div>

      <div className="w-full flex gap-6">
        <IncomeBar />
        <div className="w-[588px] h-[284px] bg-white rounded-xl">
          {" "}
          <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
            <div className="font-medium text-base">Income - Expense</div>
          </div>
        </div>
      </div>

      <LastRecord />
    </div>
  );
};
