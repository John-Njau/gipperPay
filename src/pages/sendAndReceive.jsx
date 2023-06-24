import { useCallback, useEffect, useState } from "react";
import Sidebar  from "../components/Sidebar";

const SendAndReceive = () => {
  const [mode, setMode] = useState("send");

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onCloseClick = useCallback(() => {
    alert("Close");
  }, []);

  const onButtonClick = useCallback(() => {
    alert("Proceed");
  }, []);

  const sendButton = useCallback(() => {
    setMode("send");
  }, []);

  const receiveButton = useCallback(() => {
    setMode("receive");
  }, []);

  return (
    <div
      className="text-left text-[1rem] text-secondary-main font-px-body-text lg:w-full [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_scale-down-center] md:opacity-[1]"
      data-animate-on-scroll
    >
      {/* navbar */}
      <div className="w-full bg-[#fcfcfc] top-[0rem] left-[0rem] flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-start gap-[1.25rem]">
        <img
          className="relative w-[2.5rem] h-[2.5rem] cursor-pointer"
          alt=""
          src="/component-151.svg"
          onClick={onCloseClick}
        />
        <div className="relative font-medium">Send and Receive Stable Coin</div>
      </div>

      <div className="card__container bg-[#F7F7F7] ">
        <div className="card__content__section bg-[#FcFcFc]  w-[36rem] h-[45rem] ">
          {/* send and receive */}
          <div className=" p-[2rem] text-center ">
            <div className="flex flex-col items-center justify-start gap-[2.44rem]">
              <div className="flex flex-row items-start justify-start gap-[1.25rem]">
                <div
                  className={`rounded-8xs  w-[9.38rem] h-[2.81rem] flex flex-row p-[0.63rem] box-border items-center justify-center ${
                    mode === "send"
                      ? "text-primary-main bg-primary-light"
                      : "text-white-30 bg-white-10"
                  }`}
                  id="send"
                  onClick={sendButton}
                >
                  <div className="relative font-medium">Send</div>
                </div>
                <div
                  className={`rounded-8xs  w-[9.38rem] h-[2.81rem] flex flex-row p-[0.63rem] box-border items-center justify-center ${
                    mode === "receive"
                      ? "text-primary-main bg-primary-light"
                      : "text-white-30 bg-white-10"
                  }`}
                  id="receive"
                  onClick={receiveButton}
                >
                  <div className="relative">Receive</div>
                </div>
              </div>

              {mode === "send" && (
                <div className="send__wrapper">
                  <div className="flex flex-col items-start justify-start gap-[2.5rem] text-left text-[0.81rem] text-secondary-main">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                        <div className="relative font-medium">
                          Select Coin and Amount
                        </div>
                        <input
                          className="font-px-body-text text-[0.81rem] bg-white rounded-8xs box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start border-[1px] border-solid border-secondary-20"
                          type="text"
                          defaultValue="0.00"
                          placeholder="GU$T"
                          id="gust"
                        />
                        <div className="w-[18.75rem] flex flex-row items-center justify-between text-right text-[0.69rem] text-white-30">
                          <div className="relative">
                            <span>Available Balance:</span>
                            <span className="font-medium"> 0 GU$T</span>
                          </div>
                          <div className="rounded-8xs bg-primary-light flex flex-row py-[0.31rem] px-[0.63rem] items-center justify-center text-[0.81rem] text-primary-main">
                            <div className="relative">Max</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                      <div className="relative font-medium">{`Enter Wallet address `}</div>
                      <input
                        className="font-px-body-text text-[0.81rem] bg-white rounded-8xs box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-start border-[1px] border-solid border-secondary-20"
                        type="text"
                        placeholder="wqgeiugyu84827638hjsvfdcvu3"
                      />
                    </div>
                    <div className="box-border w-[18.75rem] flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem] text-white-30 border-t-[1px] border-dashed border-white-30">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative">Exchange Rate</div>
                        <div className="flex flex-row items-start justify-center gap-[0.63rem]">
                          <div className="relative font-medium">1 GU$T</div>
                          <img
                            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                            alt=""
                            src="/uilexchange.svg"
                          />
                          <div className="relative font-medium">N725</div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative">Fee</div>
                        <div className="flex flex-row items-start justify-center">
                          <div className="relative font-medium">0 GU$T</div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative">Amount you’ll receive</div>
                        <div className="flex flex-row items-start justify-center">
                          <div className="relative font-medium">0.00 GU$T</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] py-[0.63rem] px-[1.25rem] bg-primary-main rounded-8xs w-[12.5rem] h-[2.81rem] flex flex-row box-border items-center justify-center"
                    onClick={onButtonClick}
                  >
                    <div className="relative text-[1rem] font-px-body-text text-white text-left">
                      Proceed
                    </div>
                  </button>
                </div>
              )}
              {mode === "receive" && (
                <div className="receive__wrapper">
                  <div className="flex flex-col items-center justify-center gap-[1.25rem] text-left text-secondary-main">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative font-medium inline-block w-[18.69rem]">
                        Copy Wallet Address or scan barcode
                      </div>
                      <div className="relative text-[0.81rem] text-white-30 inline-block w-[17rem]">
                        Please ensure coin is transferred to this address and
                        specified Network
                      </div>
                    </div>
                    <img
                      className="relative w-[12.5rem] h-[12.5rem] object-cover"
                      alt=""
                      src="/qr-code-image-34@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.31rem] text-[0.81rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                        <div className="relative font-medium">{`Wallet Address `}</div>

                        <input
                          className="font-px-body-text text-[0.81rem] bg-white rounded-8xs box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-start border-[1px] border-solid border-secondary-20"
                          type="text"
                          placeholder="wqgeiugyu84827638hjsvfdcvu3"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.63rem] text-white-30">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] object-cover"
                        alt=""
                        src="/image-35@2x.png"
                      />
                      <div className="relative">Tron Network (TRC20)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* steps on the left side */}
        {/* <div className="bg-[#fcfcfc] top-[0rem] p-[0.5rem] w-[24.38rem] h-[73.25rem] text-[1.19rem]">
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
                <div className="relative">
                  Choose Network and wallet Address
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <div className="rounded-3xs bg-[#CECCD4] w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
                  <div className="relative">3</div>
                </div>
                <div className="relative">Confirm PIN</div>
              </div>
            </div>
          </div>
        </div> */}
        <Sidebar />
      </div>
    </div>
  );
};

export default SendAndReceive;
