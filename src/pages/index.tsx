import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import AwardPool from "@/components/award-pool";
import NumberPool from "@/container/number-pool";
import PickedNumber from "@/components/picked-number";
import EnterGameScreen from "@/container/enter-game-screen";

export default function Home() {
  const [enterPlayer, setEnterPlayer] = useState(0);

  //加入狀態 1=未加入仍有空房 2=未加入無空房 3=已加入等待中 4=已加入遊戲開始
  const [enterState, setEnterState] = useState(1);

  const socket = io();

  const handleJoinGame = () => {
    setEnterPlayer((prevEnterPlayer) => prevEnterPlayer + 1);
    socket.emit("buttonClick");
  };

  socket.on("hideButton", () => {
    setEnterState(4);
  });

  const [pickedNumber, setPickedNumber] = useState<number[]>([]);
  const hadlePickedNumber = (value: number) => {
    if (pickedNumber.length >= 5) {
      return;
    }
    if (
      pickedNumber.filter((ele: number) => {
        return ele === value;
      }).length > 0
    ) {
      return;
    }
    let newNumber = [...pickedNumber];
    newNumber.push(value);
    setPickedNumber(newNumber);
  };

  const [answerNumber, setAnswerNumber] = useState(0);

  return (
    // <div className="text-black">Connected Clients: {connectedClients}</div>
    <div className="border-2 h-[840px] border-sky-400	">
      <AwardPool></AwardPool>
      {/* {!hideEnter && (
        <button
          className="bg-black"
          onClick={() => {
            handleJoinGame();
          }}
        >
          123
        </button>
      )} */}
      <EnterGameScreen enterState={enterState} />
      <div className="flex relative ">
        <NumberPool hadlePickedNumber={hadlePickedNumber} />
        <PickedNumber pickedNumber={pickedNumber} />
      </div>
    </div>
  );
}
