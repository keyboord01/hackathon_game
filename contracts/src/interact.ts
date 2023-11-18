import { Field, Mina, PrivateKey, PublicKey, fetchAccount } from 'o1js';
import { RockPaperScissors } from './RockPaperScissors.js';

const Network = Mina.Network('https://proxy.berkeley.minaexplorer.com/graphql');

Mina.setActiveInstance(Network);

// Replace with your zkApp public key
const appKey = PublicKey.fromBase58(
  'B62qk3NjxB3PMZwihYTqaPVeBJefotqerajbWt9SZzZMWncfaZon2te'
);

const zkApp = new RockPaperScissors(appKey);
await fetchAccount({ publicKey: appKey });

// Replace with the private key corresponding to your account
const accountPrivateKey = PrivateKey.fromBase58(
  'EKEvtDCL9HfsUApeRcedS9Lw2wvpe2zcFBwru3uS6ZRApSNvxTNe'
);
const accountPublicKey = accountPrivateKey.toPublicKey();

console.log('Compiling...');
await RockPaperScissors.compile();

const player1Id = Field(1); // Replace with actual player identifier
const player2Id = Field(2); // Replace with actual player identifier

const tx = await Mina.transaction(
  { sender: accountPublicKey, fee: 0.1e9 },
  () => {
    // Players join the game
    zkApp.joinGame(player1Id);
    zkApp.joinGame(player2Id);

    // Players make their choices
    const player1Choice = Field(0); // Rock
    const player2Choice = Field(2); // Scissors
    zkApp.makeChoice(player1Id, player1Choice);
    zkApp.makeChoice(player2Id, player2Choice);

    // Reveal choices and determine the winner
    zkApp.revealChoices();
    console.log('Game played, revealing choices...');
  }
);

console.log('Proving transaction...');
await tx.prove();
const sentTx = await tx.sign([accountPrivateKey]).send();
console.log(
  'Transaction sent. View at: https://berkeley.minaexplorer.com/transaction/' +
    sentTx.hash()
);
