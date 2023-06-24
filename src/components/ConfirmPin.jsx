import React from "react";
import { useCallback } from "react";

const closeCardBtn = () => {
  alert("Close the card");
};

const confirmPin = () => {
  alert("Confirm pin here");
};

const confirmPinCard = () => {
  return (
    <div className="rounded-xl bg-white flex flex-col p-[2.5rem] items-center justify-start gap-[2.5rem]">
      <div
        className="w-[17.13rem] flex flex-row p-[0.63rem] box-border items-start justify-start"
        onClick={closeCardBtn}
      >
        <img
          className="relative w-[2.5rem] h-[2.5rem] cursor-pointer"
          alt=""
          src="/button.svg"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.25rem] text-[0.81rem]">
        <div className="flex flex-col items-center justify-start gap-[0.63rem]">
          <div className="relative font-medium">Transaction PIN</div>
          <div className="relative text-secondary-30 text-center">
            Confirm with Transaction PIN
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.63rem] text-center text-[1.19rem] text-white-30">
          <input
            className="rounded-lg bg-white w-[2.5rem] h-[2.5rem] flex flex-col items-start justify-start border-[1px] border-solid border-primary-main p-[0.5rem]"
            type="text"
            inputMode="numeric"
            maxLength="1"
            placeholder="1"
          />
          <input
            className="rounded-lg bg-white w-[2.5rem] h-[2.5rem] flex flex-col items-start justify-start border-[1px] border-solid border-primary-main p-[0.5rem]"
            type="text"
            inputMode="numeric"
            maxLength="1"
            placeholder="2"
          />
          <input
            className="rounded-lg bg-white w-[2.5rem] h-[2.5rem] flex flex-col items-start justify-start border-[1px] border-solid border-secondary-20 p-[0.5rem]"
            type="text"
            inputMode="numeric"
            maxLength="1"
            placeholder="-"
          />
          <input
            className="rounded-lg bg-white w-[2.5rem] h-[2.5rem] flex flex-col items-start justify-start border-[1px] border-solid border-secondary-20 p-[0.5rem]"
            type="text"
            inputMode="numeric"
            maxLength="1"
            placeholder="-"
          />
        </div>
      </div>
      <div className="relative text-[0.81rem] text-center flex items-center w-[17.44rem] text-secondary-30">
        <span className="[line-break:anywhere] w-full">
          <span>{`Don’t Have one? `}</span>
          <span className="font-medium text-primary-main">
            Set Transaction PIN
          </span>
        </span>
      </div>
      <div
        className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center cursor-pointer text-white"
        onClick={confirmPin}
      >
        <div className="relative">Confirm</div>
      </div>
    </div>
  );
};

export default confirmPinCard;
