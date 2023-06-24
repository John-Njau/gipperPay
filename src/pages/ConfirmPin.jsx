import { useCallback } from "react";

const ConfirmPIN = () => {
 

  const onButtonClick = () => {
    history.push("/choose-a-network");
  };

  return (
    <div className="bg-white-10 h-[73.25rem] text-left text-[1rem] text-secondary-main font-px-body-text">
      <div className="absolute top-[21.88rem] left-[25rem] w-[47.63rem] md:flex md:flex-row hidden flex-row items-center justify-between">
        <div className="w-[21.44rem] flex flex-row py-[1.25rem] px-[0rem] box-border items-center justify-between">
          <img
            className="relative w-[2.5rem] h-[2.5rem]"
            alt=""
            src="/group-73911.svg"
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
        <div className="flex flex-col items-end justify-start">
          <div className="relative font-medium">Select Crypto To Buy</div>
          <div className="relative text-[0.81rem] text-white-30">
            Gipperpay@gmail.com
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] w-[24.38rem] h-[73.25rem] text-[1.19rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[24.38rem] h-[73.25rem]" />
        <div className="absolute top-[10.88rem] left-[1.5rem] flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="relative font-medium">Steps</div>
          <div className="flex flex-col items-start justify-start gap-[2.19rem] text-[1rem] text-white">
            <div className="flex flex-row items-center justify-start gap-[0.63rem]">
              <div className="rounded-3xs bg-secondary-main w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
                <div className="relative">1</div>
              </div>
              <div className="relative text-secondary-main">
                Select Coin and Amount
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.63rem]">
              <div className="rounded-3xs bg-secondary-main w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
                <div className="relative">2</div>
              </div>
              <div className="relative text-secondary-main">
                Choose Network and wallet Address
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.63rem] text-secondary-main">
              <div className="rounded-3xs bg-secondary-light w-[2.06rem] flex flex-col p-[0.31rem] box-border items-center justify-center">
                <div className="relative">3</div>
              </div>
              <div className="relative">Confirm with PIN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[65.81rem] flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-start gap-[1.25rem]">
        <img
          className="relative w-[2.5rem] h-[2.5rem] cursor-pointer"
          alt=""
          src="/group-73911.svg"
        />
        <div className="relative font-medium">
          Choose a network for this transaction
        </div>
      </div>
      <div className="absolute top-[10.88rem] left-[15.56rem] bg-white w-[36rem] h-[45rem] text-white-30">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        <div className="absolute h-[68.33%] w-[52.08%] top-[13.47%] right-[23.96%] bottom-[18.19%] left-[23.96%] flex flex-col items-center justify-start gap-[2.44rem]">
          <div className="flex flex-col items-start justify-start gap-[2.5rem]">
            <div className="w-[18.75rem] flex flex-col items-start justify-start text-secondary-main">
              <div className="relative font-medium">
                Network And Wallet Address
              </div>
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
                      className="absolute h-[83.33%] w-full top-[10.41%] right-[0%] bottom-[6.26%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute top-[0rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                    <div className="absolute top-[1.02rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                  </div>
                  <div className="relative">GU$T</div>
                </div>
                <div className="relative text-[1rem] font-medium text-secondary-main">{`0.00 `}</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.63rem]">
              <div className="relative text-[0.81rem] font-medium text-secondary-main">
                Choose Network
              </div>
              <div className="w-[18.75rem] flex flex-row p-[0.63rem] box-border items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] object-cover"
                    alt=""
                    src="/image-351@2x.png"
                  />
                  <div className="relative">Tron Network (TRC20)</div>
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fluentradiobutton24filled.svg"
                />
              </div>
              <div className="w-[18.75rem] flex flex-row p-[0.63rem] box-border items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] object-cover"
                    alt=""
                    src="/image-36@2x.png"
                  />
                  <div className="relative">Binance Smart Chain - (BEP20)</div>
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fluentradiobutton24filled.svg"
                />
              </div>
            </div>
            <div className="relative hidden w-[19.56rem]">
              Choose another coin to Sell
            </div>
            <div className="hidden flex-col items-start justify-start gap-[0.31rem] text-[0.81rem]">
              <div className="relative font-medium text-secondary-main">
                Select Coin
              </div>
              <div className="rounded-8xs bg-white box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row py-[0.63rem] px-[1.25rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/usdt.svg"
                />
                <div className="flex-1 relative">USDT</div>
                <img
                  className="relative w-[1rem] h-[1rem] hidden"
                  alt=""
                  src="/help-icon.svg"
                />
                <img
                  className="relative w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src="/group-7389.svg"
                />
              </div>
              <div className="relative text-[0.69rem] text-right">
                <span>Avaliable Balance:</span>
                <span className="font-medium"> 0 BTC</span>
              </div>
            </div>
            <div className="box-border w-[18.75rem] flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem] text-[0.81rem] border-t-[1px] border-dashed border-white-30">
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
          <div className="rounded-8xs bg-primary-main w-[12.5rem] h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center cursor-pointer text-white">
            <div className="relative">Confirm</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0.06rem] left-[0.06rem] w-[90.13rem] h-[73.06rem]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray [backdrop-filter:blur(10px)]" />
      </div>
      <div className="absolute top-[7.19rem] left-[33.81rem] rounded-xl bg-white flex flex-col p-[2.5rem] items-center justify-start gap-[2.5rem]">
        <div className="w-[17.13rem] flex flex-row p-[0.63rem] box-border items-start justify-start">
          <img
            className="relative w-[2.5rem] h-[2.5rem] cursor-pointer"
            alt=""
            src="/button.svg"
          />
        </div>
        <div className="w-[47.63rem] hidden flex-row items-center justify-between">
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
              Gipperpay@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1.25rem] text-[0.81rem]">
          <div className="flex flex-col items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">Transaction PIN</div>
            <div className="relative text-secondary-30 text-center">
              Confirm with Transaction PIN
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.63rem] text-center text-[1.19rem] text-white-30">
            <div className="rounded-lg bg-white w-[2.5rem] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-[2.5rem] flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-primary-main">
                <div className="flex-1 relative">1</div>
              </div>
            </div>
            <div className="rounded-lg bg-white w-[2.5rem] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-[2.5rem] flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-primary-main">
                <div className="flex-1 relative">2</div>
              </div>
            </div>
            <div className="rounded-lg bg-white w-[2.5rem] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-[2.5rem] flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-secondary-20">
                <div className="flex-1 relative">-</div>
              </div>
            </div>
            <div className="rounded-lg bg-white w-[2.5rem] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-[2.5rem] flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-secondary-20">
                <div className="flex-1 relative">-</div>
              </div>
            </div>
            <div className="rounded-lg bg-white w-[2.5rem] hidden flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-[2.5rem] flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-secondary-20">
                <div className="flex-1 relative">5</div>
              </div>
            </div>
            <div className="rounded-lg bg-white w-[2.5rem] hidden flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-[2.5rem] flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-secondary-20">
                <div className="flex-1 relative">6</div>
              </div>
            </div>
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
          onClick={onButtonClick}
        >
          <div className="relative">Confirm</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPIN;
