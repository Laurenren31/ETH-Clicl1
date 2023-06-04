import React from "react";

const PickedNumber = (props: any) => {
  const { pickedNumber } = props;
  console.log(pickedNumber);
  return (
    <div className="flex flex-col text-black font-dela text-2xl">
      已選擇的數字
      {pickedNumber}
    </div>
  );
};

export default PickedNumber;
