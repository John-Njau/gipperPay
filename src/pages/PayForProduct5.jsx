import { useCallback } from "react";

const PayForProduct5 = () => {
  const onComponent1Click = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <div className="relative bg-white-10 w-full h-[73.25rem] overflow-hidden text-left text-[1.75rem] text-secondary-main font-px-body-text">
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] overflow-hidden flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-start gap-[1.25rem]">
        <img
          className="relative w-[2.5rem] h-[2.5rem]"
          alt=""
          src="/component-151.svg"
        />
        <div className="relative font-medium">Gipper Payment</div>
      </div>
      <img
        className="absolute top-[1.25rem] left-[75.5rem] w-[12.78rem] h-[2.5rem] cursor-pointer"
        alt=""
        src="/component-1.svg"
        onClick={onComponent1Click}
      />
      <div className="absolute top-[6.25rem] left-[14.63rem] rounded-xl bg-white w-[60.75rem] h-[38.69rem] flex flex-col items-center justify-center gap-[2.5rem] text-[1rem] text-white-30">
        <div className="flex flex-col items-center justify-start gap-[0.31rem]">
          <div className="relative">Amount</div>
          <div className="relative text-[1.75rem] font-medium text-secondary-main">
            N200,000
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[1.25rem] text-[1.19rem] text-secondary-main">
          <div className="relative text-[0.81rem]">Select a Payment option</div>
          <div className="rounded-3xs bg-lavender w-[21.88rem] flex flex-col py-[0.63rem] px-[1.25rem] box-border items-start justify-center gap-[0.31rem]">
            <div className="flex flex-row py-[0rem] px-[0.63rem] items-start justify-start">
              <img
                className="relative w-[2.5rem] h-[2.5rem] object-cover"
                alt=""
                src="/image-402@2x.png"
              />
            </div>
            <div className="relative font-medium">Pay with Crypto</div>
            <div className="relative text-[0.81rem]">
              Send to Crypto Wallet Address
            </div>
          </div>
          <div className="rounded-3xs bg-lightgoldenrodyellow w-[21.88rem] flex flex-col py-[0.63rem] px-[1.25rem] box-border items-start justify-center gap-[0.31rem]">
            <img
              className="relative w-[3.63rem] h-[2.5rem] object-cover"
              alt=""
              src="/image-24@2x.png"
            />
            <div className="relative font-medium">Pay with Card</div>
            <div className="relative text-[0.81rem]">
              Pay with card convert to crypto on-fly
            </div>
            <div className="rounded-3xs bg-darkolivegreen w-[4.81rem] h-[1.25rem] flex flex-row py-[0.25rem] px-[0.5rem] box-border items-center justify-center text-[0.69rem] text-lightgoldenrodyellow">
              <div className="relative">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForProduct5;
