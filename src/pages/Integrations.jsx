import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Integrations = () => {
  const navigate = useNavigate();
  const [showMainSecretKey, setShowMainSecretKey] = useState(false);
  const [showMainPublicKey, setShowMainPublicKey] = useState(false);
  const [showTestSecretKey, setShowTestSecretKey] = useState(false);
  const [showTestPublicKey, setShowTestPublicKey] = useState(false);
  const [selectedOption, setSelectedOption] = useState("usdt");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const paymentPagePopUp = () => {
    navigate("/pay-for-product");
  };

  const handleCopyMainSecretKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert("Secret key copied to clipboard!");
  };

  const handleCopyMainPublicKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert("Public key copied to clipboard!");
  };

  const handleCopyTestSecretKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert("Secret key copied to clipboard!");
  };

  const handleCopyTestPublicKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert("Public key copied to clipboard!");
  };

  const handleUpdateWebhookUrl = () => {
    alert("Webhook URL updated!");
  };

  const regenerateMainKey = () => {
    alert("Key regenerated!");
  };

  const regenerateTestKey = () => {
    alert("Key regenerated!");
  };

  const toggleMainSecretKeyVisibility = () => {
    setShowMainSecretKey(!showMainSecretKey);
  };

  const toggleMainPublicKeyVisibility = () => {
    setShowMainPublicKey(!showMainPublicKey);
  };

  const toggleTestSecretKeyVisibility = () => {
    setShowTestSecretKey(!showTestSecretKey);
  };

  const toggleTestPublicKeyVisibility = () => {
    setShowTestPublicKey(!showTestPublicKey);
  };

  const handlePayout = () => {
    alert("Payout initiated!");
  };

  const options = [
    { value: "usdt", label: "USDT", image: "/usdt.svg" },
    { value: "btc", label: "BTC", image: "/btc.svg" },
    { value: "eth", label: "ETH", image: "/eth.svg" },
  ];

  return (
    <>
      <div className="main__container flex flex-row bg-white text-[1rem] text-secondary-main font-px-body-text ">
        {/* Main section - Developer */}
        <div className="basis-1/4">
        
        <div className="absolute top-[0rem] left-[0rem] bg-white-10 w-[16.88rem] h-[73.25rem] text-white-30">
        <div className="absolute top-[6.25rem] left-[2.06rem] flex flex-col items-start justify-start gap-[1.25rem]">
          <div
            className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-start gap-[0.63rem] cursor-pointer"
          >
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/pajamasoverview.svg"
            />
            <div className="relative">Overview</div>
          </div>
          <div
            className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between cursor-pointer"
          >
            <img
              className="relative w-[0.95rem] h-[1.25rem]"
              alt=""
              src="/vector4.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">{`Buy & Sell `}</div>
          </div>
          <div
            className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between cursor-pointer"
          >
            <img
              className="relative w-[0.84rem] h-[1.25rem]"
              alt=""
              src="/group-2.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">
              Gipperfi
            </div>
          </div>
          <div
            className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between cursor-pointer"
          >
            <img
              className="relative w-[0.91rem] h-[1.25rem]"
              alt=""
              src="/group-14.svg"
            />
            <div className="relative inline-block w-[8rem] shrink-0">
              Donations
            </div>
          </div>
          <div
            className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between cursor-pointer"
          >
            <img
              className="relative w-[1.3rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/fluentpeoplequeue24filled.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">
              Payroll
            </div>
          </div>
          <div className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/mdishopoutline.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">
              Products
            </div>
          </div>
          <div className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between">
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolsreceiptlong.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">
              Transactions
            </div>
          </div>
          <div
            className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between cursor-pointer"
          >
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolssettingsrounded.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">
              Settings
            </div>
          </div>
          <div className="self-stretch relative box-border h-[0.06rem] border-t-[1px] border-solid border-white-20" />
          <div className="rounded-xl w-[12.5rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between text-primary-main">
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              src="/mdiintegratedcircuit.svg"
            />
            <div className="relative inline-block w-[7.94rem] shrink-0">
              Developers
            </div>
          </div>
        </div>
        <img
          className="absolute top-[1.25rem] left-[2.06rem] w-[12.78rem] h-[2.5rem]"
          alt=""
          src="/component-1.svg"
        />
      </div>
         
        </div>
    
    
        
        <div className="basis-1/2 developer__section m-[1.25rem]">
          <div className="top-0 left-0 bg-white w-full flex flex-row py-[1.25rem] px-[2.5rem] box-border items-center justify-between text-center text-white">
            <div className="rounded-8xs bg-secondary-main h-[2.5rem] overflow-hidden flex flex-col py-[0.63rem] px-[1.56rem] box-border items-center justify-center">
              <div
                className=""
                onClick={paymentPagePopUp}
              >{`Send & Receive`}</div>
            </div>
          </div>
          <div className="top-[5.56rem] left-[19.38rem] text-[1.75rem] font-medium">
            Developer
          </div>
          <div className="top-[9.56rem] left-[18.06rem] box-border flex flex-row py-[0rem] px-[0.63rem] items-center justify-start gap-[1.25rem] text-white-30 border-b-[1px] border-solid border-white-20">
            <div className="flex flex-row p-[0.63rem] items-start justify-start text-primary-main border-b-[1px] border-solid border-primary-main">
              <div className="relative font-medium">Api Keys</div>
            </div>
          </div>
          <div className="top-[13.75rem] left-[19.31rem] flex flex-col items-start justify-start gap-[1.5rem] text-[0.81rem]">
            <div className="flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="self-stretch flex flex-row items-center justify-between text-[1.19rem]">
                <div className="relative font-medium">
                  Main API Configuration
                </div>
                <div
                  className="text-[0.81rem] text-primary-main"
                  onClick={regenerateMainKey}
                >
                  Regenerate Key
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Secret Key</div>
                <div className="flex flex-row items-center justify-start gap-[0.31rem] text-[1rem] text-white-30">
                  <div className="flex">
                    <label className="block">
                      <div className="relative">
                        <input
                          type={showMainSecretKey ? "text" : "password"}
                          name="secretkey"
                          className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                          placeholder="*************"
                        />
                        <img
                          className="absolute top-1/2 transform -translate-y-1/2 right-3 w-[1rem] h-[1rem] cursor-pointer"
                          alt={showMainSecretKey ? "Hide key" : "Show Key"}
                          src="/eye.svg"
                          onClick={toggleMainSecretKeyVisibility}
                        />
                      </div>
                    </label>
                  </div>
                  <div
                    onClick={handleCopyMainSecretKey}
                    className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] cursor-pointer text-white"
                  >
                    <div className="relative">Copy</div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/layerssubtract.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Public Key</div>
                <div className="flex flex-row items-center justify-start gap-[0.31rem] text-[1rem] text-white-30">
                  <div className="flex">
                    <label className="block">
                      <div className="relative">
                        <input
                          type={showMainPublicKey ? "text" : "password"}
                          name="publickey"
                          className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                          placeholder="*************"
                        />
                        <img
                          className="absolute top-1/2 transform -translate-y-1/2 right-3 w-[1rem] h-[1rem] cursor-pointer"
                          alt={showMainPublicKey ? "Hide key" : "Show Key"}
                          src="/eye.svg"
                          onClick={toggleMainPublicKeyVisibility}
                        />
                      </div>
                    </label>
                  </div>
                  <div
                    onClick={handleCopyMainSecretKey}
                    className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] cursor-pointer text-white"
                  >
                    <div className="relative">Copy</div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/layerssubtract.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Webhook URL</div>
                <div className="flex flex-row items-center justify-start gap-[0.31rem] text-[1rem] text-white-30">
                  <div className="flex">
                    <label className="block">
                      <div className="relative">
                        <input
                          name="publickey"
                          className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                          placeholder="Enter Webhook URL"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="rounded-8xs bg-primary-10 h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center cursor-pointer text-primary-30">
                    <div className="relative" onClick={handleUpdateWebhookUrl}>
                      Update
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white-10 w-[24.81rem] flex flex-row p-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-[1rem] text-primary-main">
                <img
                  className="relative w-[1.71rem] h-[1.56rem] overflow-hidden shrink-0"
                  alt=""
                  src="/etcaution.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                  <div className="relative font-medium">Important Note</div>
                  <div className="relative text-[0.81rem] text-white-30 inline-block w-[20.25rem]">
                    This API Key is for Live/Production Purpose
                  </div>
                </div>
              </div>
            </div>
            <div className="relative box-border w-[35.19rem] h-[0.06rem] border-t-[1px] border-solid border-white-30" />
            <div className="flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="self-stretch flex flex-row items-center justify-between text-[1.19rem]">
                <div className="relative font-medium">
                  Test API Configuration
                </div>
                <div
                  className="relative text-[0.81rem] text-primary-main"
                  onClick={regenerateTestKey}
                >
                  Regenerate Key
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Secret Key</div>
                <div className="flex flex-row items-center justify-start gap-[0.31rem] text-[1rem] text-white-30">
                  <div className="flex">
                    <label className="block">
                      <div className="relative">
                        <input
                          type={showTestSecretKey ? "text" : "password"}
                          name="secretkey"
                          className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                          placeholder="*************"
                        />
                        <img
                          className="absolute top-1/2 transform -translate-y-1/2 right-3 w-[1rem] h-[1rem] cursor-pointer"
                          alt={showTestSecretKey ? "Hide key" : "Show Key"}
                          src="/eye.svg"
                          onClick={toggleTestSecretKeyVisibility}
                        />
                      </div>
                    </label>
                  </div>
                  <div
                    onClick={handleCopyMainSecretKey}
                    className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] cursor-pointer text-white"
                  >
                    <div className="relative">Copy</div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/layerssubtract.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Public Key</div>
                <div className="flex flex-row items-center justify-start gap-[0.31rem] text-[1rem] text-white-30">
                  <div className="flex">
                    <label className="block">
                      <div className="relative">
                        <input
                          type={showTestPublicKey ? "text" : "password"}
                          name="publickey"
                          className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                          placeholder="*************"
                        />
                        <img
                          className="absolute top-1/2 transform -translate-y-1/2 right-3 w-[1rem] h-[1rem] cursor-pointer"
                          alt={showTestPublicKey ? "Hide key" : "Show Key"}
                          src="/eye.svg"
                          onClick={toggleTestPublicKeyVisibility}
                        />
                      </div>
                    </label>
                  </div>
                  <div
                    onClick={handleCopyMainSecretKey}
                    className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] cursor-pointer text-white"
                  >
                    <div className="relative">Copy</div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/layerssubtract.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Webhook URL</div>
                <div className="flex flex-row items-center justify-start gap-[0.31rem] text-[1rem] text-white-30">
                  <div className="flex">
                    <label className="block">
                      <div className="relative">
                        <input
                          name="publickey"
                          className="rounded-8xs bg-white box-border h-[3.13rem] w-[23.88rem] overflow-hidden shrink-0 flex flex-row p-[0.63rem] items-center justify-start gap-[0.63rem] border-[1px] border-solid border-secondary-20"
                          placeholder="Enter Webhook URL"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="rounded-8xs bg-primary-10 h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center cursor-pointer text-primary-30">
                    <div className="relative" onClick={handleUpdateWebhookUrl}>
                      Update
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white-10 w-[25.38rem] flex flex-row p-[0.63rem] box-border items-center justify-start gap-[1.25rem] text-[1rem] text-primary-main">
              <img
                className="relative w-[1.71rem] h-[1.56rem] overflow-hidden shrink-0"
                alt=""
                src="/etcaution.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative font-medium">Important Note</div>
                <div className="relative text-[0.81rem] text-white-30 inline-block w-[20.19rem]">
                  This API Key is for Live/Production Purpose
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet section */}
        <div className="basis-1/4 inset-1.5 wallet__section top-[5rem] left-[1.44rem] flex flex-col items-start justify-start gap-[3.75rem] bg-white-10 p-2 h-[619px] w-[390px] md:justify-center sm:justify-center">
          <div className="flex flex-col items-start justify-start gap-[1.25rem] text-[1.19rem]">
            <div className="flex flex-row items-center justify-start gap-[0.63rem]">
              <img
                className="relative w-[1.88rem] h-[1.88rem]"
                alt=""
                src="/group-43.svg"
              />
              <div className="relative font-medium">Wallet</div>
            </div>
            <div className="w-[18.75rem] flex flex-row items-center justify-between text-[1rem] text-white-30">
              <div className="flex flex-col items-start justify-start">
                <div className="relative">Amount Received</div>
                <b className="relative text-[1.19rem] text-secondary-main">
                  {`$0.00`}
                </b>
              </div>
              <div className="rounded-8xs bg-primary-main h-[2.81rem] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-center gap-[0.63rem] text-white">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/uilmoneywithdraw.svg"
                />
                <div className="relative" onClick={handlePayout}>
                  Payout
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.25rem] text-secondary-50">
            <div className="relative text-[1.75rem] font-medium text-secondary-main">
              Integrations
            </div>
            <div className="rounded-xl w-[18.88rem] h-[2.69rem] flex flex-row py-[0rem] pr-[1.25rem] pl-[0.63rem] box-border items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <img
                  className="relative w-[2.5rem] h-[2.5rem]"
                  alt=""
                  src="/group-42.svg"
                />
                <div className="flex flex-col items-start justify-center">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative font-medium">{`Website name`}</div>
                  </div>
                  <div className="relative text-[0.69rem] text-white-30">
                    {`Name of integration`}
                  </div>
                </div>
              </div>
              <a href="website">
                <img
                  className="relative w-[1.04rem] h-[0.52rem]"
                  alt=""
                  src="/vector1.svg"
                />
              </a>
            </div>
            <div className="rounded-xl w-[18.88rem] h-[2.69rem] flex flex-row py-[0rem] pr-[1.25rem] pl-[0.63rem] box-border items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <img
                  className="relative w-[2.5rem] h-[2.5rem]"
                  alt=""
                  src="/group-42.svg"
                />
                <div className="flex flex-col items-start justify-center">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative font-medium">{`Website name`}</div>
                  </div>
                  <div className="relative text-[0.69rem] text-white-30">
                    {`Name of integration`}
                  </div>
                </div>
              </div>
              <a href="website">
                <img
                  className="relative w-[1.04rem] h-[0.52rem]"
                  alt=""
                  src="/vector1.svg"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.63rem]">
            <div className="relative text-[1.44rem] font-medium">
              Set Default Currency
            </div>
            <div className="rounded-8xs bg-white box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row py-[0rem] pr-[1.25rem] pl-[0.63rem] items-center justify-between border-[1px] border-solid border-secondary-20">
              <div className="rounded-8xs bg-white-10 w-[5.38rem] flex flex-row py-[0.31rem] px-[0rem] box-border items-center justify-center gap-[0.31rem]">
                <div className="relative w-[1.14rem] h-[1.25rem]">
                  <img
                    className="absolute h-[83.33%] w-full top-[10.41%] right-[0%] bottom-[6.26%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                  <div className="absolute top-[0rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                  <div className="absolute top-[1.02rem] left-[0.42rem] bg-primary-main w-[0.21rem] h-[0.23rem]" />
                </div>
                <div className="relative font-medium">GU$T</div>
              </div>
              <img
                className="relative w-[1.04rem] h-[1.04rem]"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="rounded-8xs bg-white box-border w-[18.75rem] h-[3.13rem] overflow-hidden shrink-0 flex flex-row py-[0rem] pr-[1.25rem] pl-[0.63rem] items-center justify-between border-[1px] border-solid border-secondary-20">
              <div className="rounded-8xs bg-white-10 h-[2.5rem] flex flex-row p-[0.31rem] box-border items-center justify-start gap-[0.63rem]">
                <div className="flex flex-row items-center justify-start gap-[0.31rem]">
                  {/* drop down Options(USDT, GBB, etc) */}
                  <div className="relative inline-block text-left">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={selectedOption}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          <span className="font-medium">{option.label}</span>
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="relative w-[1.04rem] h-[1.04rem]"
                alt=""
                src="/vector4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
