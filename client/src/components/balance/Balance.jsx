"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiLogoNetlify } from "react-icons/bi";

export const Balance = () => {
  const [balance, setBalance] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/balance",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [token]);
  return (
    <div className="w-[384px] h-full bg-blue-600 rounded-[20px] pt-8 pl-8">
      <div className="flex items-center text-white gap-2">
        <BiLogoNetlify className="text-white w-5 h-5" />
        Geld
      </div>
      <div className="text-slate-300 pt-[40px]">
        <p className="text-gray-100">Cash</p>
        <p className="text-2xl text-white">{balance}</p>
      </div>
    </div>
  );
};
