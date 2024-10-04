"use client";

import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const IncomeBar = () => {
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl flex flex-col">
      <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <div className="font-medium text-base">Income - Expense</div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-5 h-[226px] w-[588px]">
        <Bar
          data={{
            labels: ["Jan", "Feb", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "income",
                data: [
                  3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                ],
                backgroundColor: "#84CC16",
                borderRadius: 10000,
                barPercentage: 0.6, // Adjusts the width of the bars
                categoryPercentage: 0.6, // Adjusts the spacing between the bars
              },
              {
                label: "expense",
                data: [
                  2500000, 2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                ],
                backgroundColor: "#F97316",
                borderRadius: 10000,
                barPercentage: 0.6, // Adjusts the width of the bars
                categoryPercentage: 0.6, // Adjusts the spacing between the bars
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false, // Removes the vertical gridlines (optional)
                },
              },
              y: {
                beginAtZero: true, // Ensures y-axis starts at zero
              },
            },
          }}
          width={16}
          height={162}
        />
      </div>
    </div>
  );
};
