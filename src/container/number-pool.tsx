import React from "react";
import NumberButton from "@/components/number-button";

const NumberPool = (props: any) => {
  const { hadlePickedNumber } = props;
  const buttonList = [];
  for (let i = 1; i <= 100; i++) {
    buttonList.push(
      <NumberButton
        key={i}
        number={i}
        hadlePickedNumber={hadlePickedNumber}
      ></NumberButton>
    );
  }

  return (
    <div className="grid grid-cols-10 relative z-0 bottom-[692px]">
      {buttonList}
    </div>
  );
};

export default NumberPool;
