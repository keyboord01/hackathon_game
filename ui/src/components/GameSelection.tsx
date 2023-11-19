import { useState } from "react";
import RockPepperScissors from "./RockPepper";
import FlipACoin from "./FlipACoin";
export default function Game() {
  const [showRockPepperScissors, setShowRockPepperScissors] = useState(false);
  const [showFlipACoin, setShowFlipACoin] = useState(false);

  const handleRockPepperScissorsClick = () => {
    setShowRockPepperScissors(true);
  };
  const handleshowFlipACoinClick = () => {
    setShowFlipACoin(true);
  };

  if (showRockPepperScissors) {
    return <RockPepperScissors />;
  }
  if (showFlipACoin) {
    return <FlipACoin />;
  }

  return (
    <div className="flex  flex-col items-center justify-center gap-12 h-">
      <p className="text-4xl sm:-translate-y-24 translate-y-0">
        Pick a game to play! <br />
      </p>
      <div className="flex text-2xl text-center lg:flex-row gap-4 flex-col bg ">
        <div
          onClick={handleRockPepperScissorsClick}
          className="bg-yellow-800 bg-opacity-20 rounded-lg hover:bg-opacity-60 cursor-pointer w-[300px] h-[300px] flex items-center justify-center"
        >
          Rock Paper Scissors
        </div>
        <div
          onClick={handleshowFlipACoinClick}
          className="bg-yellow-800 bg-opacity-20 rounded-lg hover:bg-opacity-60 cursor-pointer w-[300px] h-[300px] flex items-center justify-center"
        >
          Flip A Coin
        </div>
      </div>
    </div>
  );
}
