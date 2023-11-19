import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import GradientBG from "../components/GradientBG.js";
import styles from "../styles/Home.module.css";
import heroMinaLogo from "../../public/assets/hero-mina-logo.svg";
import arrowRightSmall from "../../public/assets/arrow-right-small.svg";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import ConnectWallet from "../components/ConnectWallet";
import useAccount from "@/state/useAccount";
import CoinFlipGame from "@/components/FlipACoin.jsx";

export default function Home() {
  const { account } = useAccount();
  const [balance, setBalance] = useState(100); // Starting balance in MINA

  // Define a function to update the balance
  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  useEffect(() => {
    (async () => {
      const { Mina, PublicKey } = await import("o1js");

      // Update this to use the address (public key) for your zkApp account.
      // To try it out, you can try this address for an example "Add" smart contract that we've deployed to
      // Berkeley Testnet B62qkwohsqTBPsvhYE8cPZSpzJMgoKn4i1LQRuBAtVXWpaT4dgH6WoA.
      const zkAppAddress = "";
      // This should be removed once the zkAppAddress is updated.
      if (!zkAppAddress) {
        console.error(
          'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qkwohsqTBPsvhYE8cPZSpzJMgoKn4i1LQRuBAtVXWpaT4dgH6WoA'
        );
      }
      //const zkApp = new Add(PublicKey.fromBase58(zkAppAddress))
    })();
  }, []);

  if (account) {
    return (
      <GradientBG>
        <div className="min-h-full bg-yellow-100 bg-opacity-40 overflow-x-hidden">
          <Navbar balance={balance} />
          <div className="w-screen h-screen  flex items-center justify-center">
            <Main />
          </div>
        </div>
      </GradientBG>
    );
  }
  return (
    <GradientBG>
      <div className="bg-yellow-100 bg-opacity-40 overflow-x-hidden h-full">
        <Navbar balance={balance} />
        <div className="w-screen h-screen  flex items-center justify-center">
          <ConnectWallet />
        </div>
      </div>
    </GradientBG>
  );
}
