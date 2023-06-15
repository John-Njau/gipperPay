import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PayForProduct4 = () => {
  const navigate = useNavigate();

  const connectWallet = useCallback(() => {
    navigate("/pay-for-product5");
  }, [navigate]);

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
        
      />
      <div className="absolute top-[6.25rem] left-[20.56rem] rounded-xl bg-white w-[45.13rem] h-[38.69rem] flex flex-col p-[3.75rem] box-border items-center justify-start gap-[1.25rem] text-[1.19rem]">
        <div className="flex flex-col items-center justify-center gap-[2.5rem]">
          <div className="flex flex-row items-center justify-center gap-[0.63rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem] object-cover"
              alt=""
              src="/image-401@2x.png"
            />
            <div className="relative font-medium">Pay with Crypto</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[0.31rem] text-[1rem] text-white-30">
            <div className="relative">Amount</div>
            <div className="relative text-[1.75rem] font-medium text-secondary-main">
              N200,000
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white flex flex-col p-[1.25rem] items-start justify-start gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start gap-[0.19rem]">
            <div className="relative font-medium">Connect Wallet</div>
            <div className="flex flex-row items-start justify-start text-[0.81rem] text-white-30">
              <div className="relative">
                Please connect a wallet to make Payment
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.31rem] text-[0.81rem]">
            <div className="relative font-medium">Enter Email</div>
            <div className="rounded-8xs bg-white box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-start text-white-30 border-[1px] border-solid border-secondary-20">
              <div className="flex-1 relative">Enter Email</div>
            </div>
          </div>
          <div className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] text-[1rem] text-white">
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/mdiwalletaddoutline.svg"
            />
            <div className="relative" onClick={connectWallet}>Connect Wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForProduct4;
