import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Payment: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[28.2px] pb-[73.9px] pr-5 pl-[21px] box-border gap-[10.4px] leading-[normal] tracking-[normal] text-left text-[30px] text-d9d9d9 font-frank-ruhl-libre">
      <div className="w-[1439.8px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <a className="[text-decoration:none] relative tracking-[0.2em] font-black text-[inherit] mq450:text-lg mq1050:text-[24px]">
          <span>{`BIDS `}</span>
          <span className="text-black">AUTO</span>
        </a>
        <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 text-right text-xl text-grey font-urw-geometric">
          <a className="[text-decoration:none] h-[13px] relative text-[inherit] inline-block min-w-[58px] mq450:text-base">
            Logout
          </a>
        </div>
      </div>
      <main className="w-[1440.2px] flex flex-col items-start justify-start gap-[31.4px] max-w-full shrink-0 mq750:gap-[16px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/vector-1624.svg"
        />
        <section className="w-[1320.8px] flex flex-row items-start justify-start gap-[143.3px] max-w-full lg:flex-wrap lg:gap-[72px] mq750:gap-[36px] mq450:gap-[18px]">
          <FrameComponent1 />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default Payment;
