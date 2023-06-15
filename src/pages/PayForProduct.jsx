import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PayForProduct = () => {
  const navigate = useNavigate();

  const saveReceipt = useCallback(() => {
    navigate("/pay-for-product1");
    // alert("saveReceipt");
  }, [navigate]);

  return (
    <div className="container  bg-white text-[1rem] text-secondary-main font-px-body-text ">
      <div className="navbar__component flex-1 flex flex-row gap-4 ">
        <div className=" top-[0rem] left-[0rem] bg-white overflow-hidden flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-start gap-[1.25rem]">
          <img
            className="relative w-[2.5rem] h-[2.5rem]"
            alt=""
            src="/component-15.svg"
          />
          <div className="relative font-medium">Gipper Payment</div>
        </div>
        <div>
          <img
            className=" top-[1.25rem] left-[75.5rem] w-[12.78rem] h-[2.5rem] cursor-pointer"
            alt=""
            src="/component-1.svg"
          />
        </div>
      </div>

      <div className="payment__card top-[6.25rem] left-[22.44rem] rounded-xl bg-white w-[45.13rem] h-[43.94rem] flex flex-col p-[1.25rem] box-border items-center justify-start text-center text-[1rem]">
        <div className="w-[24.69rem] flex flex-col items-center justify-start gap-[1.25rem]">
          <img
            className="relative w-[17.26rem] h-[10.31rem]"
            alt=""
            src="/group-7430.svg"
          />
          <div className="relative text-[1.75rem] font-medium text-left">
            Payment Received
          </div>
          <div className="relative font-medium">
            <span>{`we’ve received your payment of  `}</span>
            <span className="text-primary-main">0.00USDT</span>
          </div>
          <div className="relative box-border w-[22.38rem] h-[0.06rem] border-t-[1px] border-solid border-secondary-10" />
          <div className="relative text-[0.81rem] font-medium">
            PAYMENT DETAILS
          </div>
          <div className="relative box-border w-[22.38rem] h-[0.06rem] border-t-[1px] border-solid border-secondary-10" />
          <div className="self-stretch flex flex-row py-[0rem] px-[1.25rem] items-center justify-between text-white-50">
            <div className="relative">Payment Amount</div>
            <div className="relative font-medium">0.00 USDT</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[1.25rem] items-center justify-between text-white-50">
            <div className="relative">Payment Date</div>
            <div className="relative font-medium">Feb 25, 2023</div>
          </div>
          <div className="self-stretch flex flex-row py-[0rem] px-[1.25rem] items-center justify-between text-white-50">
            <div className="relative">Payment Method</div>
            <div className="relative font-medium">Crypto wallet</div>
          </div>
          <div className="relative box-border w-[22.38rem] h-[0.06rem] border-t-[1px] border-solid border-secondary-10" />
          <img
            className="relative w-[6.39rem] h-[1.25rem]"
            alt=""
            src="/component-11.svg"
          />
          <div className="w-[47.63rem] hidden flex-row items-center justify-between text-left">
            <div className="w-[21.44rem] flex flex-row py-[1.25rem] px-[0rem] box-border items-center justify-between">
              <img
                className="relative w-[2.5rem] h-[2.5rem]"
                alt=""
                src="/group-7391.svg"
              />
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <img
                  className="relative w-[1.88rem] h-[1.88rem] hidden"
                  alt=""
                  src="/group-10.svg"
                />
                <div className="relative font-medium hidden">Buy BTC</div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start text-[1.75rem]">
              <div className="relative font-medium">Select Crypto To Buy</div>
              <div className="relative text-[1rem] text-white-30">
                {`Gipperpay@gmail.com`}
              </div>
            </div>
          </div>
          <div className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] cursor-pointer text-left text-white">
            <div className="relative" onClick={saveReceipt}>
              Save Receipt
            </div>
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/icoutlineshare.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForProduct;
