import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import "./reactCOIServiceWorker";
import { useEffect } from "react";
import useAccount from "@/state/useAccount";

export default function App({ Component, pageProps }: AppProps) {
  const { setAccount } = useAccount();

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      if (e.key === "accounts") {
        setAccount(JSON.parse((e.newValue as any) ?? {}));
      }
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
