import React, { useState } from "react";
import styles from "./CoinFlipGame.module.css"; // Import your CSS module here

const CoinFlipGame = () => {
  const [betAmount, setBetAmount] = useState(0);
  const [coinSide, setCoinSide] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [balance, setBalance] = useState(100);
  const [resultMessage, setResultMessage] = useState("");
  const [selectedBetAmount, setSelectedBetAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [hasWon, setHasWon] = useState(false); // Track win/loss
  const [isGameInProgress, setIsGameInProgress] = useState(false); // Track game progress
  const [isGameStarted, setIsGameStarted] = useState(true); // Track game start

  const BET_AMOUNTS = [0.25, 0.5, 1, 1.5, 2, 2.5]; // Bet amounts

  const selectBetAmount = (amount) => {
    if (amount > balance) {
      setResultMessage("Insufficient balance to place this bet.");
      return;
    }
    setBetAmount(amount);
    setCoinSide(""); // Reset coin side
    setGameResult(""); // Reset game result
    setResultMessage(""); // Reset result message
    setSelectedBetAmount(amount); // Set the selected bet amount
  };

  const placeBet = (side) => {
    setCoinSide(side);
  };

  const flipCoin = () => {
    setIsGameInProgress(true);
    const delay = Math.random() * 2000 + 1000; // 1 to 3 seconds
    setIsLoading(true); // Set loading to true

    setTimeout(() => {
      const result = Math.random() < 0.5 ? "heads" : "tails";
      setGameResult(result);
      const win = result === coinSide;

      if (win) {
        setBalance(balance + betAmount);
        setHasWon(true); // Set win status to true
        setResultMessage(
          `You Won ${betAmount} MINA! Claim your ${betAmount * 2} MINAS`
        );
      } else {
        setBalance(balance - betAmount);
        setHasWon(false); // Set win status to false
        setResultMessage(`You Lost ${betAmount} MINAS :(`);
      }

      setIsLoading(false); // Set loading to false when the result is ready
      setIsGameInProgress(false); // Set game in progress to false
    }, delay);
  };

  const startGame = () => {
    setIsGameStarted(true);
  };

  const playAgain = () => {
    // Reset the game state
    setBetAmount(0);
    setCoinSide("");
    setGameResult("");
    setResultMessage("");
    setSelectedBetAmount(0);
    setHasWon(false);
  };

  const claimMinas = () => {
    // Handle claiming MINAs here
  };

  return (
    <div className={styles.container}>
      <div className="flex items-center justify-center">
        <img
          src="/assets/flipCoin.png"
          alt="Coin"
          className={styles.coinImage}
        />
      </div>

      {isLoading ? (
        // Render loading animation
        <div className="flex justify-center items-center h-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : resultMessage ? (
        // Render result message and buttons
        <div className="flex flex-col items-center">
          {/* Apply green or red text color based on hasWon */}
          <p
            className={`${styles.resultText} ${
              hasWon ? styles.greenText : styles.redText
            }`}
          >
            {resultMessage}
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={playAgain}
            >
              Play Again
            </button>
            {hasWon && (
              <button
                className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
                onClick={claimMinas}
              >
                Claim MINAs
              </button>
            )}
          </div>
        </div>
      ) : !isGameStarted ? (
        // Render start game button
        <button
          onClick={startGame}
          className="border-2 border-black px-4 py-2 rounded-sm hover:-translate-x-[2px] hover:translate-y-[2px] cursor-pointer text-2xl"
        >
          Start Game
        </button>
      ) : (
        // Render game content
        <div>
          <div>
            <h1 className="mb-4 text-2xl">Use </h1>
            <div className={styles.betGrid}>
              {BET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => selectBetAmount(amount)}
                  className={`${styles.betAmountButton} ${
                    amount === selectedBetAmount ? styles.selectedBetAmount : ""
                  }`}
                >
                  {amount} MINA
                </button>
              ))}
            </div>
          </div>
          <div>
            {betAmount > 0 && (
              <div className={styles.choiceButtons}>
                <h1 className="mb-4 text-2xl">on </h1>
                <button
                  onClick={() => placeBet("heads")}
                  className={`${styles.betButton} ${
                    coinSide === "heads" ? styles.selectedBetButton : ""
                  }`}
                >
                  Heads
                </button>
                <button
                  onClick={() => placeBet("tails")}
                  className={`${styles.betButton} ${
                    coinSide === "tails" ? styles.selectedBetButton : ""
                  }`}
                >
                  Tails
                </button>
              </div>
            )}
          </div>

          {coinSide && (
            <button onClick={flipCoin} className={styles.flipButton}>
              {isLoading ? "Flipping..." : "Flip Coin"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CoinFlipGame;
