import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[59.8px] min-w-[398px] max-w-full text-left text-xl text-grey font-urw-geometric mq750:gap-[30px] mq750:min-w-full ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[19.5px] text-7xl text-black font-frank-ruhl-libre">
        <img
          className="h-[22.1px] w-[12.9px] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[57px] mq450:text-2xl">
            Back
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5.6px] gap-[19.3px]">
        <div className="h-[13px] relative flex items-center min-w-[90px] mq450:text-base">
          Try agency
        </div>
        <h2 className="m-0 h-6 relative text-17xl font-medium font-frank-ruhl-libre text-black flex items-center mq450:text-3xl mq1050:text-10xl">
          7 Days Free
        </h2>
        <div className="h-[13px] relative flex items-center mq450:text-base">
          Then US$19.00 per month
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[27.8px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[23.7px] text-right">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[3px] text-black">
              <div className="h-[13px] relative flex items-center min-w-[88px] mq450:text-base">
                7 days free
              </div>
            </div>
            <div className="h-[13px] relative text-left flex items-center min-w-[63px] mq450:text-base">
              Agency
            </div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="h-[13px] w-[193px] relative flex items-center mq450:text-base">
                US$19.00 / month after
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-1625.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[5px] gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[32.8px]">
            <div className="h-[13px] relative flex items-center min-w-[67px] mq450:text-base">
              Subtotal
            </div>
            <div className="h-[13px] relative text-cornflowerblue flex items-center whitespace-nowrap mq450:text-base">
              Add Promotion Code
            </div>
          </div>
          <div className="h-[13px] relative text-black text-right flex items-center min-w-[81px] whitespace-nowrap mq450:text-base">
            US$19.00
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="h-[13px] relative flex items-center min-w-[30px] mq450:text-base">
            Tax
          </div>
          <div className="h-[13px] relative text-right flex items-center mq450:text-base">
            Enter address to calculate
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/vector-1626.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="w-[170px] flex flex-col items-start justify-start gap-[32px]">
            <div className="h-[13px] relative flex items-center min-w-[115px] mq450:text-base">
              Total after trial
            </div>
            <div className="self-stretch h-[13px] relative text-black flex items-center mq450:text-base">
              Total due today
            </div>
          </div>
          <div className="w-[79px] flex flex-col items-start justify-start gap-[32px] text-right">
            <div className="h-[13px] relative flex items-center min-w-[79px] whitespace-nowrap mq450:text-base">
              US$19.00
            </div>
            <div className="self-stretch h-[13px] relative text-black flex items-center min-w-[79px] whitespace-nowrap mq450:text-base">
              US$0.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
