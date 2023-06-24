import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#fcfcfc] top-[0rem] p-[0.5rem] w-[24.38rem] h-[73.25rem] text-[1.19rem]">
      <div className="absolute flex flex-col items-start justify-start gap-[1.25rem]">
        <div className="relative font-medium">Steps</div>
        <div className="flex flex-col items-start justify-start gap-[2.19rem] text-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.63rem] text-white">
            <div className="rounded-3xs bg-secondary-main w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
              <div className="relative">1</div>
            </div>
            <div className="relative text-secondary-main">
              Select Coin and Amount
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="rounded-3xs bg-[#CECCD4] w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
              <div className="relative">2</div>
            </div>
            <div className="relative">Choose Network and wallet Address</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="rounded-3xs bg-[#CECCD4] w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
              <div className="relative">3</div>
            </div>
            <div className="relative">Confirm PIN</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;