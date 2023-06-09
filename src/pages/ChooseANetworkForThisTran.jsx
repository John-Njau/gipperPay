import { useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import ConfirmPin from "../components/ConfirmPin";
import ReactModal from "react-modal";

const ChooseANetworkForThisTran = () => {
  const [isConfirmPinOpen, setIsConfirmPinOpen] = useState(false);

  const onBackButtonClick = useCallback(() => {
    alert("Back button clicked");
  }, []);

  const openConfirmPinModal = useCallback(() => {
    setIsConfirmPinOpen(true);
    alert("Confirm Pin Modal opened");
  }, []);

  const closeConfirmPinModal = useCallback(() => {
    setIsConfirmPinOpen(false);
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
          src="/group-73911.svg"
          onClick={onBackButtonClick}
        />
        <div className="relative font-medium">
          Choose a network for this transaction
        </div>
      </div>

      <div className="card__container bg-[#F7F7F7] ">
        <div className="card__content__section bg-[#FcFcFc]  w-[36rem] h-[45rem] ">
          <div className="h-[68.33%] w-[52.08%] top-[13.47%] right-[23.96%] bottom-[18.19%] left-[23.96%] p-[2rem] flex flex-col items-center justify-start gap-[2.44rem]">
            <div className="flex flex-col items-start justify-start gap-[2.5rem]">
              <div className="w-[18.75rem] flex flex-col items-start justify-start text-secondary-main">
                <div className="relative font-medium">Choose Network</div>
                <div className="relative text-[0.81rem] text-white-30 inline-block w-[14.19rem]">
                  Select Network for this transaction
                </div>
              </div>
              <img
                className="relative w-[12.5rem] h-[12.5rem] object-cover hidden"
                alt=""
                src="/qr-code-image-34@2x.png"
              />
              <div className="flex flex-row items-center justify-start gap-[2.5rem] text-[0.81rem] text-secondary-main">
                <div className="relative font-medium">Send</div>
                <div className="flex flex-row items-center justify-start gap-[0.63rem] text-white-30">
                  <div className="rounded-8xs flex flex-row items-center justify-center gap-[0.31rem]">
                    <div className="relative w-[1.14rem] h-[1.25rem]">
                      <img
                        className="absolute h-[83.33%] w-full top-[10.41%] right-[0%] bottom-[6.26%] left-[0%] max-w-full max-h-full"
                        alt=""
                        src="/vector.svg"
                      />
                      <div className="absolute top-[0rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                      <div className="absolute top-[1.02rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                    </div>
                    <div className="relative">GU$T</div>
                  </div>
                  <input
                    className="relative  font-px-body-text font-bold text-[0.81rem] bg-white rounded-8xs w-[2rem] shrink-0 flex flex-row p-[0.63rem] items-center justify-start"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.63rem]">
                <div className="relative text-[0.81rem] font-medium text-secondary-main">
                  Choose Network
                </div>
                <div className="w-[18.75rem] flex flex-col gap-[0.63rem]">
                  <label className="flex items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] object-cover"
                        alt=""
                        src="/image-351@2x.png"
                      />
                      <div className="relative">Tron Network (TRC20)</div>
                    </div>
                    <input
                      type="radio"
                      name="network"
                      value="tron"
                      className="text-[#fcfcfc] rounded-full border "
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] object-cover"
                        alt=""
                        src="/image-36@2x.png"
                      />
                      <div className="relative">
                        Binance Smart Chain - (BEP20)
                      </div>
                    </div>
                    <input type="radio" name="network" value="binance" />
                  </label>
                </div>
              </div>

              <div className=" w-[18.75rem] flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem] text-[0.81rem] border-t-[1px] border-dashed border-white-30">
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
                  <div className="relative">Amount you’ll reeceive</div>
                  <div className="flex flex-row items-start justify-center">
                    <div className="relative font-medium">0.00 GU$T</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={openConfirmPinModal}
              className="rounded-8xs bg-primary-main w-[12.5rem] h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center cursor-pointer text-white"
            >
              <div className="relative">Confirm</div>
            </div>
            <ReactModal className="flex justify-center items-center "
              isOpen={isConfirmPinOpen}
              onRequestClose={closeConfirmPinModal}
            >
              <ConfirmPin />
            </ReactModal>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default ChooseANetworkForThisTran;
