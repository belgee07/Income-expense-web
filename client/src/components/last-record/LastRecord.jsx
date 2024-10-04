import { MdHome } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";

export const LastRecord = () => {
  const data = [
    {
      icon: MdHome,
      title: "Lending & Renting",
      time: "3",
      amount: "1,000",
    },

    {
      icon: MdHome,
      title: "Lending & Renting",
      time: "3",
      amount: "1,000",
    },

    {
      icon: FaShoppingBag,
      title: "Shopping",
      time: "4",
      amount: "120,000",
    },
    {
      icon: FaShoppingBag,
      title: "Shopping",
      time: "4",
      amount: "120,000",
    },
    {
      icon: BiSolidDrink,
      title: "Drinking",
      time: "1",
      amount: "40,000",
    },
    {
      icon: BiSolidDrink,
      title: "Drinking",
      time: "1",
      amount: "40,000",
    },
  ];

  return (
    <div className="w-full rounded-xl bg-white flex flex-col">
      <div className="h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <div className="font-medium text-base">Last Record</div>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="px-6 flex items-center justify-between h-20 border-b border-[#E2E8F0] w-[1152px]"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center">
              <item.icon className="text-white w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <p>{item.title}</p>
              <p>{item.time} hours ago</p>
            </div>
          </div>

          <div className="text-lime-500">{item.amount}</div>
        </div>
      ))}
    </div>
  );
};
