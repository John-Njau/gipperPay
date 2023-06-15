import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PayForProduct1 = () => {
  const navigate = useNavigate();



  const deleteWallet = useCallback(() => {
    alert("deleteWallet");
  }, []);

  const handleSubmit = useCallback(() => {
    navigate("/pay-for-product2");
    alert("handleSubmit");
  }, [navigate]);

  const handleClose = useCallback(() => {
    alert("Close");
  }, []);

  return (
    <div className="relative bg-white-10 w-screen h-[73.25rem] text-left text-[1.75rem] text-secondary-main font-px-body-text">
      <div
        className="absolute top-[0rem] left-[0rem] bg-white w-screen flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-start gap-[1.25rem]"
        onClick={handleClose}
      >
        <img
          className="relative w-[2.5rem] h-[2.5rem]"
          alt=""
          src="/component-15.svg"
        />
        <div className="font-medium">Gipper Payment</div>
      </div>
      <img
        className="top-[1.25rem] left-auto w-[12.78rem] h-[2.5rem] cursor-pointer"
        alt=""
        src="/component-1.svg"
      />
      <div className="absolute top-[6.25rem] left-[22.44rem] rounded-xl bg-white w-[50%] h-[35rem] flex flex-col p-[1.25rem] box-border items-center justify-start gap-[1.25rem] text-[1.19rem]">
        <div className="flex flex-row justify-between">
          <div className="">
            <img
              className="relative w-[2.5rem] h-[2.5rem] object-cover"
              alt=""
              src="/image-40@2x.png"
            />
            <p className="relative font-medium">Pay with Crypto</p>
          </div>

          {/* Amount */}
          <div className="flex flex-col items-start justify-start text-[1rem] text-white-30">
            <div className="relative">Amount</div>
            <div className="relative font-medium text-secondary-main">
              {`N200,000`}
            </div>
            <div className="relative text-[0.81rem]">gipperpay@gmail.com</div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start gap-[0.31rem]">
            <div className="relative font-medium">Connected Wallets</div>
            <div className="flex flex-row items-center justify-start gap-[1.25rem] text-[1rem]">
              <img
                className="relative w-[2.5rem] h-[2.5rem] object-cover"
                alt=""
                src="/image-28@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative">{`Metamask`}</div>
                <div className="relative text-[0.81rem] text-white-30">
                  {`Mrehbasvuyed.................Ytegvsafy`}
                </div>
              </div>
              <div onClick={deleteWallet}>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] shrink-0"
                  alt=""
                  src="/materialsymbolsdeleterounded.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative text-[1rem] font-medium">
            Select Payment Method
          </div>
          <div className="flex flex-col items-start justify-start text-[0.81rem]">
            <div className="flex flex-col items-start justify-start gap-[0.31rem]">
              <div className="relative font-medium">Pay with</div>
              <div className="rounded-8xs bg-white box-border w-[18.75rem] h-[3.13rem] shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20">
                <div className="rounded-8xs bg-white-10 flex flex-row p-[0.31rem] items-center justify-center gap-[0.31rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.31rem]">
                    <div className="flex flex-row p-[0.31rem] items-center justify-center">
                      <div className="relative w-[1.14rem] h-[1.25rem]">
                        <img
                          className="absolute h-[83.33%] w-[100.01%] top-[10.42%] right-[-0.01%] bottom-[6.25%] left-[0%] max-w-full max-h-full"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="absolute top-[0rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                        <div className="absolute top-[1.02rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                      </div>
                    </div>
                    <div className="relative">
                      <select>
                        <option>Gu$T</option>
                        <option>USDT</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="relative text-[1.19rem] font-medium text-white-30 text-right inline-block w-[10.88rem] shrink-0">
                  <input placeholder="0.00"></input>
                </div>
                <img
                  className="relative w-[1rem] h-[1rem] hidden"
                  alt=""
                  src="/help-icon.svg"
                />
              </div>
              <div className="w-[18.75rem] flex flex-row items-center justify-between text-right text-[0.69rem] text-white-30">
                <div className="relative">
                  <span>Available Balance:</span>
                  <span className="font-medium"> {`0 GU$T`}</span>
                </div>
                <div className="rounded-8xs bg-primary-light flex flex-row py-[0.31rem] px-[0.63rem] items-center justify-center text-[0.81rem] text-primary-main">
                  <div className="relative">Max</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center text-[1rem] text-white">
          <div className="relative" onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForProduct1;
