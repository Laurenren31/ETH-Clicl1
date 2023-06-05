import React from "react";

const EnterGameScreen = (props: { enterState: number }) => {
  const { enterState } = props;

  return (
    <>
      <div className="h-[708px] w-full bg-white opacity-80 relative z-10"></div>
      <div className="flex items-center justify-center h-[708px] -mt-[708px] relative">
        <button className="font-dela bg-sky-400 relative z-20">
          <p className="bg-sky-400 text-4xl px-6 py-4">加入遊戲</p>
        </button>
      </div>
    </>
  );
};

export default EnterGameScreen;
