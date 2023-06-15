import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const PayForProduct2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const unlockWallet = useCallback(() => {
    navigate("/pay-for-product3");
    alert("unlockWallet");
  }, [navigate]);

  const toggleVisibility = useCallback(() => {
    setShowPassword((showPassword) => !showPassword);
  }, []);

  const cancelTransaction = useCallback(() => {
    alert("cancelTransaction");
  }, []);

  return (
    <div className="bg-white-10 h-[73.25rem] overflow-hidden text-left text-[1.75rem] text-secondary-main font-px-body-text">
      <div className="top-[0rem] left-[0rem] bg-white overflow-hidden flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-start gap-[1.25rem]">
        <div onClick={cancelTransaction} className="w-[2.5rem] h-[2.5rem]" >
        <img
          
          alt=""
          src="/component-151.svg"
        />
        </div>

        <div className="relative font-medium">Gipper Payment</div>
      </div>

      <div className=" " />
      <div className="main__container top-[2.44rem]  bg-white w-[67.06rem] h-[47.56rem] overflow-hidden text-[0.81rem]">
        <div className="top-[2.44rem] flex flex-col items-center justify-center gap-[2.25rem]">
          <div className="flex flex-col items-center justify-center gap-[0.31rem] text-[1.19rem]">
            <div className="rounded-[100px] bg-chocolate flex flex-row p-[0.63rem] items-center justify-center mt-3">
              <img
                className="relative w-[3.13rem] h-[3.13rem] object-cover"
                alt=""
                src="/image-47@2x.png"
              />
            </div>
            <div className="relative font-medium">Welcome Back</div>
            <div className="relative text-[0.81rem] text-white-30">
             {` gipperpay@gmail.com`}
            </div>
          </div>
          <div className="flex flex-col items-start  gap-[0.31rem]">
            <div className="relative font-medium">Password</div>
            <div className="">
              <div className="flex">
                <img
                  className="top-1/2 transform -translate-y-1/2 right-3 w-[1rem] h-[1rem] cursor-pointer"
                  alt=""
                  src="/lock.svg"
                />
                <label className="block">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="publickey"
                      className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                      placeholder="*************"
                    />
                    <img
                      className="top-1/2 transform -translate-y-1/2 right-3 w-[1rem] h-[1rem] cursor-pointer"
                      alt={showPassword ? "Hide key" : "Show Key"}
                      src="/eye.svg"
                      onClick={toggleVisibility}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center text-[1rem] text-white">
            <div className="relative" onClick={unlockWallet}>
              Unlock
            </div>
          </div>
          <div className="relative text-white-30">
            <span>{`or `}</span>
            <span className="text-primary-main">
              Import using secret recovery keys
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForProduct2;
