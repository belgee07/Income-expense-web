import { Button } from "@/components";

export const RecordLeft = () => {
  return (
    <div className="max-w-[1200px] w-full h-[1080px] flex flex-col gap-4 mx-auto p-4">
      <div className="flex flex-start w-[282px] border border-red-500 py-6 px-4">
        <div className="flex w-full flex-col gap-6">
          <p className="text-2xl font-bold">Records</p>
          <Button
            // handleClick={LoginButton}
            color={"bg-blue-600"}
            text={"+ Add"}
            textColor={"text-white"}
          />
        </div>
      </div>
    </div>
  );
};
