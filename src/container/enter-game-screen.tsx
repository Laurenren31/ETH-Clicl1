import React from "react";

const EnterGameScreen = (props: { enterState: number }) => {
  const { enterState } = props;

  return (
    <>
      <div className="enterGameScreenBackGround"></div>
      <button className="font-dela bg-sky-400">
        <p className="relative -mt-40 text-5xl px-4 py-4">加入遊戲</p>
      </button>
    </>
  );
};

export default EnterGameScreen;
