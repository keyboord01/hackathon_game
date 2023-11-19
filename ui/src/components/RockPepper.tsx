// Import necessary modules
import { useState } from "react";
import styles from "./RockPaperScissors.module.css"; // Assuming you have a CSS module

// Define the choices
const CHOICES = {
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors",
};

const BET_AMOUNTS = [0.5, 1, 1.5, 2, 2.5, 3]; // Bet amounts

// Function to determine the winner
const determineWinner = (playerChoice, opponentChoice, betAmount) => {
  let result = "";
  if (playerChoice === opponentChoice) {
    result = "Draw";
  } else if (
    (playerChoice === CHOICES.ROCK && opponentChoice === CHOICES.SCISSORS) ||
    (playerChoice === CHOICES.SCISSORS && opponentChoice === CHOICES.PAPER) ||
    (playerChoice === CHOICES.PAPER && opponentChoice === CHOICES.ROCK)
  ) {
    result = `You Won ${betAmount} MINA! Claim your ${betAmount * 2} MINAS`;
  } else {
    result = `You Lost ${betAmount} MINA :(`;
  }
  return result;
};

// Function to generate a random choice for the computer
const getRandomChoice = () => {
  const choices = Object.values(CHOICES);
  return choices[Math.floor(Math.random() * choices.length)];
};

// RockPaperScissors Component
const RockPaperScissors = () => {
  const [gameMode, setGameMode] = useState(null);
  const [bet, setBet] = useState(null); // State for the bet amount
  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState("");
  const [waiting, setWaiting] = useState(false); // State to indicate waiting for the result
  const [moveSelected, setMoveSelected] = useState(false); // New state to track if a move has been selected

  const claimMinas = () => {
    console.log("MINAs claimed!"); // Placeholder action
    // Here you can add logic to update state or perform other actions
  };

  const waitingMessage = () => {
    return gameMode === "computer"
      ? "Waiting for computer..."
      : "Waiting for player...";
  };

  // Handle the player's choice
  const handleChoice = (choice) => {
    if (!result && !moveSelected) {
      setMoveSelected(true); // Mark that a move has been selected
      setPlayerChoice(choice);
      const opponent =
        gameMode === "computer" ? getRandomChoice() : getRandomChoice();
      setOpponentChoice(opponent);
      setWaiting(true); // Set waiting state

      // Delay for a random time between 1 to 4 seconds
      const delay = Math.random() * 3000 + 1000; // 1 to 4 seconds
      setTimeout(() => {
        setResult(determineWinner(choice, opponent, bet));
        setWaiting(false); // Reset waiting state
        setMoveSelected(false); // Reset move selection for next round
      }, delay);
    }
  };

  // Function to play the game again
  const playAgain = () => {
    setBet(null); // Reset bet amount
    setPlayerChoice(null); // Reset player choice
    setOpponentChoice(null); // Reset opponent choice
    setResult(""); // Reset result
    setWaiting(false); // Reset waiting state
  };

  const resultTextColor = () => {
    if (result.includes("You Won")) return "text-green-500"; // Class for winning
    if (result.includes("You Lost")) return "text-red-500"; // Class for losing
    if (result === "Draw") return "text-black"; // Class for draw
    return ""; // Default class (no additional class)
  };

  return (
    <div
      className={`${styles.gameContainer} ${
        result || waiting ? styles.gameOver : ""
      }`}
    >
      {!bet && !result && (
        <h1 className="text-4xl mb-4">
          {gameMode ? "How much are you betting?" : "Rock Paper Scissors"}
        </h1>
      )}

      {!gameMode && !result && (
        <div className={styles.buttonGroup}>
          <button onClick={() => setGameMode("computer")}>
            Play Against Computer
          </button>
          <button onClick={() => setGameMode("player")}>
            Play Against Player
          </button>
        </div>
      )}

      {gameMode && !bet && !result && (
        <div className={styles.betGrid}>
          {BET_AMOUNTS.map((amount, index) => (
            <button
              key={index}
              className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              onClick={() => setBet(amount)}
            >
              {amount} MINA
            </button>
          ))}
        </div>
      )}

      {gameMode && bet && !result && (
        <div>
          <div className={styles.choiceButtons}>
            <p className="text-5xl mt-12">Pick a Move</p>
            {/* Move buttons are disabled based on moveSelected state */}
            <button
              disabled={moveSelected}
              className="hover:scale-110 cursor-pointer"
              onClick={() => handleChoice(CHOICES.ROCK)}
            >
              <img src="/assets/Rock.png" alt="Rock" />
            </button>
            <button
              disabled={moveSelected}
              className="hover:scale-110 cursor-pointer"
              onClick={() => handleChoice(CHOICES.PAPER)}
            >
              <img src="/assets/Paper.png" alt="Paper" />
            </button>
            <button
              disabled={moveSelected}
              className="hover:scale-110 cursor-pointer"
              onClick={() => handleChoice(CHOICES.SCISSORS)}
            >
              <img src="/assets/Scissors.png" alt="Scissors" />
            </button>
          </div>
        </div>
      )}

      {/* Result display */}
      {(result || waiting) && (
        <div className="mb-12">
          <div
            className={`${styles.result} ${waiting ? "" : resultTextColor()} ${
              waiting || result === "" ? "" : styles.winAnimation
            }`}
          >
            {waiting ? waitingMessage() : result}
          </div>
        </div>
      )}

      {result && !waiting && (
        <div className="flex justify-center items-center space-x-4">
          <button
            className="mt-4 p-2 bg-yellow-500 text-black rounded hover:bg-yellow-700 bg-opacity-20 hover:bg-opacity-50 transition-colors"
            onClick={playAgain}
          >
            Play Again
          </button>
          {result.startsWith("You Won") && (
            <button
              className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
              onClick={claimMinas}
            >
              Claim MINAs
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
