import { SmartContract, State, state, method, Field, PublicKey } from 'o1js';

enum RPS {
  Rock = 0,
  Paper = 1,
  Scissors = 2,
}

export class RockPaperScissors extends SmartContract {
  @state(Field) player1 = State<Field>();
  @state(Field) player2 = State<Field>();
  @state(Field) player1Choice = State<Field>();
  @state(Field) player2Choice = State<Field>();
  @state(Field) winner = State<Field>();
  @state(Field) gameActive = State<Field>();

  constructor(address: PublicKey) {
    super(address);
    this.gameActive.set(Field(0)); // Game is not active initially
  }

  // ... Other methods including joinGame and makeChoice

  @method revealChoices() {
    if (!this.gameActive.get().equals(Field(1))) {
      throw new Error('Game is not active.');
    }

    if (
      this.player1Choice.get().equals(Field(0)) ||
      this.player2Choice.get().equals(Field(0))
    ) {
      throw new Error('Both players must make a choice.');
    }

    const choice1 = this.player1Choice.get();
    const choice2 = this.player2Choice.get();

    // Rock Paper Scissors Logic
    if (choice1.equals(choice2)) {
      this.winner.set(Field(0)); // Tie
    } else if (
      (choice1.equals(Field(RPS.Rock)) &&
        choice2.equals(Field(RPS.Scissors))) ||
      (choice1.equals(Field(RPS.Paper)) && choice2.equals(Field(RPS.Rock))) ||
      (choice1.equals(Field(RPS.Scissors)) && choice2.equals(Field(RPS.Paper)))
    ) {
      this.winner.set(this.player1.get()); // Player 1 wins
    } else {
      this.winner.set(this.player2.get()); // Player 2 wins
    }

    this.resetGame();
  }

  @method resetGame() {
    this.player1.set(Field(0));
    this.player2.set(Field(0));
    this.player1Choice.set(Field(0));
    this.player2Choice.set(Field(0));
    this.winner.set(Field(0));
    this.gameActive.set(Field(0));
  }
}
