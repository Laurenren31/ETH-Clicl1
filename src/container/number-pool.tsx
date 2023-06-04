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

  return <div className="buttonContainer">{buttonList}</div>;
};

export default NumberPool;
