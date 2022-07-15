import React from "react";
import { StepMobile } from "../StepMobile";
import { useTranslation } from "next-i18next";

const Steps = () => {
  const { t } = useTranslation();

  const data = [
    {
      isReverse: false,
      text: t('s1'),
    },
    {
      isReverse: true,
      text: t('s2'),
    },
    {
      isReverse: false,
      text: t('s3'),
    },
    {
      isReverse: true,
      text: t('s4'),
    },
    {
      isReverse: false,
      text: t('s5'),
    },
  ];

  const Step = ({ isReverse, text, idx }) => {
    return (
      <div
        className={`hidden md:flex flex-col md:flex-row justify-center w-full`}
      >
        <p
          className={`text-[#BDB9B9] w-full md:w-1/3 text-right`}
          style={{ visibility: isReverse && "hidden" }}
        >
          {text}
        </p>
        <div className="flex flex-col items-center mx-5">
          <div className="rounded-full bg-[#EAA453] p-2 h-14 w-14 flex items-center justify-center">
            <h1 className="text-[#A950FA] text-3xl text-center font-semibold">
              0{idx + 1}
            </h1>
          </div>
          {idx !== data.length - 1 && (
            <div className="bg-white w-1 h-24 hidden md:block" />
          )}
        </div>
        <p
          className={`text-[#BDB9B9] w-full md:w-1/3 text-center md:text-left ${
            !isReverse && "reversed"
          } `}
        >
          {text}
        </p>
        {/* <p className='text-[#BDB9B9] w-full md:w-1/3 text-center md:text-left ' style={{display: isReverse && 'none'}}>{text}</p> */}
      </div>
    );
  };
  
  return (
    <main className="p-2 px-2 py-10 md:p-24">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-xl md:text-xl font-semibold text-white">
          Revolutu<span className="text-[#AD53FC]">X</span>
        </h1>
        <h1 className="text-2xl md:text-4xl text-white text-center font-semibold">
          {t('simple_steps')}
        </h1>
      </div>

      <div className="justify-center flex flex-col items-center">
        {data.map((item, i) => (
          <>
            <Step text={item.text} isReverse={item.isReverse} key={i} idx={i} />
            <StepMobile
              text={item.text}
              isReverse={item.isReverse}
              key={i}
              idx={i}
            />
          </>
        ))}
      </div>
    </main>
  );
};

export default Steps;
