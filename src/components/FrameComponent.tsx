import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`shadow-[0px_0px_24px_rgba(220,_218,_218,_0.25)] rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-[37px] px-[42px] pb-11 gap-[12.1px] min-w-[565.8px] max-w-full text-left text-xl text-black font-urw-geometric border-[1px] border-solid border-d9d9d91 lg:flex-1 mq750:py-5 mq750:px-[21px] mq750:box-border mq750:min-w-full mq1050:pt-6 mq1050:pb-[29px] mq1050:box-border ${className}`}
    >
      <div className="w-[565.8px] h-[998.1px] relative shadow-[0px_0px_24px_rgba(220,_218,_218,_0.25)] rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-d9d9d91" />
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[13px] text-7xl font-frank-ruhl-libre">
        <div className="relative font-medium z-[1] mq450:text-2xl">
          Enter payment details
        </div>
      </div>
      <div className="w-[471.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[13.7px] box-border gap-[10px] max-w-full">
        <div className="h-[13px] relative flex items-center min-w-[48px] z-[1] mq450:text-base">
          Email
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[19px] px-[25px] whitespace-nowrap max-w-full z-[1] text-grey border-[1px] border-solid border-d9d9d91">
          <div className="h-[55px] w-[471.8px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-d9d9d91" />
          <div className="h-[13px] relative flex items-center z-[2]">
            Enter your email
          </div>
        </div>
      </div>
      <div className="w-[471.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[13.7px] box-border gap-[10px] max-w-full">
        <div className="h-[13px] relative flex items-center z-[1] mq450:text-base">
          Card Information
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-[19px] px-0 pb-0 gap-[21px] max-w-full z-[1] text-grey border-[1px] border-solid border-d9d9d91">
          <div className="self-stretch h-[110px] relative rounded-3xs bg-white box-border hidden border-[1px] border-solid border-d9d9d91" />
          <div className="w-[162.3px] flex flex-row items-start justify-start py-0 px-[25px] box-border">
            <div className="h-[13px] flex-1 relative flex items-center whitespace-nowrap z-[2] mq450:text-base">
              1234 1123 2123
            </div>
          </div>
          <div className="self-stretch h-[55px] relative max-w-full mq450:h-auto mq450:min-h-[55]">
            <div className="absolute top-[0px] left-[0px] box-border w-[472.8px] h-px z-[2] border-t-[1px] border-solid border-d9d9d91" />
            <div className="absolute top-[0px] left-[25.3px] w-[430.1px] flex flex-row items-end justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[21px]">
                <div className="h-[13px] relative flex items-center min-w-[74px] whitespace-nowrap z-[2] mq450:text-base">
                  MM / YY
                </div>
              </div>
              <div className="h-[55px] w-[57.4px] flex flex-row items-start justify-start gap-[20.4px]">
                <div className="self-stretch w-px relative box-border z-[3] border-r-[1px] border-solid border-d9d9d91" />
                <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                  <div className="self-stretch h-[13px] relative flex items-center z-[2] mq450:text-base">
                    CVV
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15.5px]">
                <img
                  className="w-[23.9px] h-[23.9px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-1261155728.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[471.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[13.6px] box-border gap-[10px] max-w-full">
        <div className="h-[13px] relative flex items-center z-[1] mq450:text-base">
          Cardholder Name
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[19px] px-[25px] max-w-full z-[1] border-[1px] border-solid border-d9d9d91">
          <div className="h-[55px] w-[471.8px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-d9d9d91" />
          <input
            className="w-[146px] [border:none] [outline:none] font-urw-geometric text-xl bg-[transparent] h-[13px] relative text-grey text-left flex items-center p-0 z-[2] mq450:text-base"
            placeholder="Full name on card"
            type="text"
          />
        </div>
      </div>
      <div className="w-[471.8px] flex flex-col items-start justify-start gap-[10.7px] max-w-full">
        <div className="h-[13px] relative flex items-center z-[1] mq450:text-base">
          Country or Region
        </div>
        <div className="self-stretch rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-[21px] gap-[18.5px] max-w-full z-[1] border-[1px] border-solid border-d9d9d91">
          <div className="self-stretch h-[110px] relative rounded-3xs bg-white box-border hidden border-[1px] border-solid border-d9d9d91" />
          <div className="self-stretch flex flex-col items-end justify-start gap-[22.4px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[22px] pl-[25px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                <div className="h-[13px] relative flex items-center min-w-[42px] shrink-0 z-[2] mq450:text-base">
                  India
                </div>
                <img
                  className="h-[12.3px] w-[21.1px] relative object-contain shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-d9d9d91" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[22px] text-grey">
            <div className="h-[13px] relative flex items-center min-w-[27px] z-[2] mq450:text-base">
              Pin
            </div>
          </div>
        </div>
      </div>
      <div className="w-[471.8px] rounded-3xs bg-white box-border flex flex-col items-end justify-start pt-[17px] px-0 pb-1.5 gap-[20.7px] max-w-full z-[1] border-[1px] border-solid border-d9d9d91">
        <div className="self-stretch h-[144.9px] relative rounded-3xs bg-white box-border hidden border-[1px] border-solid border-d9d9d91" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-6 pl-[25px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[17.3px] max-w-full">
            <div className="h-[13px] relative flex items-center max-w-full z-[2] mq450:text-base">
              Securely save my information for 1-click checkout
            </div>
            <div className="self-stretch h-[35px] relative text-lg leading-[22px] text-grey flex items-center z-[2]">
              Enter your phone number to create a link account and pay faster on
              Bids Auto and everywhere Link is accepted.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[4.5px] max-w-full text-lg text-grey">
          <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-d9d9d91" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[18px] pl-[25px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[9.8px]">
                  <img
                    className="h-6 w-6 relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="h-3 relative flex items-center min-w-[90px] z-[2]">
                      0123456789
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[87px] rounded-8xs box-border flex flex-row items-start justify-start py-1.5 px-3.5 z-[2] text-base border-[1px] border-solid border-grey">
                <div className="h-[11px] relative inline-block min-w-[57px]">
                  Optional
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[317.1px] flex flex-col items-end justify-start pt-0 px-0 pb-[11.2px] box-border gap-[12.2px]">
        <div className="flex flex-row items-end justify-start gap-[23.4px]">
          <div className="flex flex-row items-start justify-start gap-[6.4px]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
              loading="lazy"
              alt=""
              src="/next-3-1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <div className="h-[13px] relative flex items-center min-w-[32px] z-[1] mq450:text-base">
                Link
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
            <div className="w-[3px] h-[3px] relative rounded-[50%] bg-black z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px] text-grey">
            <div className="h-[13px] relative [text-decoration:underline] flex items-center min-w-[81px] z-[1] mq450:text-base">
              More info
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-lg text-grey">
          <div className="flex flex-row items-end justify-start gap-[9.8px]">
            <input
              className="m-0 h-[20.3px] w-[20.3px] relative rounded-10xs box-border shrink-0 z-[1] border-[1px] border-solid border-d9d9d91"
              type="checkbox"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.1px]">
              <div className="h-3 relative flex items-center shrink-0 z-[1]">
                I’m purchasing as a business
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[472px] flex flex-row items-start justify-start pt-0 px-0 pb-[8.6px] box-border max-w-full">
        <button className="cursor-pointer py-[17px] px-5 bg-d9d9d9 flex-1 rounded-3xs box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full z-[1] border-[2px] border-solid border-d9d9d9 hover:bg-limegreen hover:box-border hover:border-[2px] hover:border-solid hover:border-limegreen">
          <div className="h-[15px] relative text-3xl font-urw-geometric text-white text-left inline-block min-w-[125px]">
            Start Free Trial
          </div>
        </button>
      </div>
      <div className="w-[471.4px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full text-center text-lg text-grey">
        <div className="h-[35px] flex-1 relative leading-[22px] flex items-center justify-center max-w-full z-[1]">
          After your trial ends, you will be charged US$19.00 per month starting
          11 july 2024. You can always cancel before then.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
