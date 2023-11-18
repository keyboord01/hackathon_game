import { useState } from "react";
import RockPepperScissors from "./RockPepper";
export default function Game() {
  const [showRockPepperScissors, setShowRockPepperScissors] = useState(false);

  const handleRockPepperScissorsClick = () => {
    setShowRockPepperScissors(true);
  };

  if (showRockPepperScissors) {
    return <RockPepperScissors />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-4xl -translate-y-24">
        Pick a game to play! <br />
      </p>
      <div className="flex lg:flex-row gap-4 flex-col bg ">
        <div
          onClick={handleRockPepperScissorsClick}
          className="bg-orange-400 bg-opacity-50 hover:bg-opacity-100 cursor-pointer w-[300px] h-[300px] flex items-center justify-center"
        >
          Rock Paper Scissors
        </div>
        <div className="bg-orange-400 bg-opacity-50 hover:bg-opacity-100 cursor-pointer w-[300px] h-[300px] flex items-center justify-center">
          game 2
        </div>
        <div className="bg-orange-400 bg-opacity-50 hover:bg-opacity-100 cursor-pointer w-[300px] h-[300px] flex items-center justify-center">
          game 3
        </div>
      </div>
    </div>
  );
}
