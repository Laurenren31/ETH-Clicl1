import React from "react";
import Image from "next/image";

const NumberButton = (props: any) => {
  const { number, hadlePickedNumber } = props;

  return (
    <div
      className="grid w-[78px] h-[71px] group cursor-pointer"
      onClick={() => {
        hadlePickedNumber(props.number);
      }}
    >
      <p className="font-dela text-3xl text-black text-center">
        <span className="relative z-10">{props.number}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 29.03"
          className="-mt-14 relative z-0"
        >
          <path
            className="fill-sky-400 group-hover:fill-sky-500"
            d="M3.93,25A14.27,14.27,0,0,1,0,14.57,14.53,14.53,0,0,1,3.93,4.13Q7.88,0,16,0q7.74,0,11.87,4.19A14.22,14.22,0,0,1,32,14.57,14.16,14.16,0,0,1,28,25q-4,4-12,4T3.93,25Z"
          />
        </svg>
      </p>
    </div>
  );
};

export default NumberButton;
