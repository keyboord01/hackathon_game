import useWallet from "./useWallet";

export default function ConnectWallet() {
  const { connect } = useWallet();

  return (
    <div className="h-[90%] min-w-full flex justify-top flex-col items-center relative gap-32">
      <div className=" ">
        <p className="text-3xl text-yellow-900">1#</p>
      </div>
      <img src="./assets/coinflip.gif" alt="gif" />
      <img
        src="./assets/coinflip.gif"
        alt="gif"
        className="absolute translate-y-64 opacity-60 rotate-180    scale-95 grayscale z-[-1] blur-sm "
      />
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-3xl text-yellow-900 text-center">
          Connect your wallet to get started!
        </p>
        <button
          className="bg-yellow-300 shadow-2xl p-2 px-4 cursor-pointer text-3xl rounded-md hover:-translate-x-[2px] hover:translate-y-[2px]  border-spacing-3 border border-red-900 border-x-4"
          onClick={connect}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
