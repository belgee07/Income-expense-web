"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const IncomeBar = () => {
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl flex flex-col">
      <div className="h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <div className="font-medium text-base">Income - Expense</div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-5 h-[226px]">
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Income",
                data: [
                  3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                ],
                backgroundColor: "#84CC16",
                borderRadius: 10000,
              },
              {
                label: "Expense",
                data: [
                  2500000, 2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                ],
                backgroundColor: "#F97316",
                borderRadius: 10000,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true, // Ensures responsiveness
            scales: {
              x: {
                grid: {
                  display: false, // Removes vertical gridlines (optional)
                },
              },
              y: {
                beginAtZero: true, // Ensures y-axis starts at zero
              },
            },
          }}
        />
      </div>
    </div>
  );
};
