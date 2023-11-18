import Rock from "../../public/assets/Rock.png";
import Scissors from "../../public/assets/Scissors.png";
import Paper from "../../public/assets/Paper.png";
import Arrow from "../../public/assets/arrow.png";
import { useState } from "react";

export default function Rps() {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <div className="grid relative h-[100%] max-w-[40%] grid-rows-3 grid-cols-3 ">
        <div
          className=" col-start-1  span-1 flex items-center justify-center"
          onClick={() => {
            selected === "scissors" ? setSelected("") : setSelected("scissors");
          }}
        >
          <img
            src="/assets/Scissors.png"
            alt="/"
            className={` cursor-pointer  w-full h-full object-contain transition-all ${
              selected === "scissors" ? ` scale-[1.8]` : `scale-[1.5]`
            }`}
          />
        </div>
        <div
          className="col-start-3 span-1 flex items-center justify-center "
          onClick={() => {
            selected === "rock" ? setSelected("") : setSelected("rock");
          }}
        >
          <img
            src="/assets/Rock.png"
            alt="/"
            className={`cursor-pointer  w-full h-full object-contain  transition-all ${
              selected === "rock" ? `scale-[2]` : `scale-[1.7]`
            }`}
          />
        </div>
        <div
          className=" col-start-2 row-start-3 span-1 flex items-center justify-center "
          onClick={() => {
            selected === "paper" ? setSelected("") : setSelected("paper");
          }}
        >
          <img
            src="/assets/Paper.png"
            alt="/"
            className={`cursor-pointer  h-full object-contain  transition-all w-full ${
              selected === "paper" ? ` scale-[1.8]` : `scale-[1.5]`
            }`}
          />
        </div>
        <div className=" col-start-1 row-start-2 span-1 flex items-center justify-center rotate-[60deg]">
          <img
            src="./assets/arrow.png"
            alt="/"
            className="h-full object-contain"
          />
        </div>
        <div className=" col-start-3 row-start-2 span-1 flex items-center justify-center -rotate-[50deg] translate-y-[10%] -translate-x-[20%]">
          <img
            src="./assets/arrow.png"
            alt="/"
            className="h-full object-contain"
          />
        </div>
        <div className=" col-start-2 row-start-1 span-1 flex items-center justify-center rotate-[180deg] -translate-y-1/3">
          <img
            src="./assets/arrow.png"
            alt="/"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
