export const Chip = ({ text, color, icon: Icon }) => {
  return (
    <div className="w-[384px] h-full rounded-[20px] bg-white py-4 px-6 flex flex-col gap-4 ">
      <div className="flex items-center gap-2">
        <p className={`w-2 h-2 bg-${color}-500 rounded-full`}></p>
        <p>Your {text}</p>
      </div>

      <p className="w-full border border-t bg-base-200"></p>

      <div>
        <p className="text-4xl font-bold ">1,200,000 ₮</p>
        <p className="text-slate-500 text-lg">Your {text} Amount</p>
      </div>

      <div className="flex items-center gap-1">
        <Icon className="bg-lime-500 text-white rounded-full" />
        <p>32% from last month</p>
      </div>
    </div>
  );
};
