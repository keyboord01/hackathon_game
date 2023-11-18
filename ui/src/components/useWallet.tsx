import useAccount from "@/state/useAccount";
import toast from "react-hot-toast";

const useWallet = () => {
  const { setAccount } = useAccount();
  const connect = async () => {
    // @ts-ignore
    if (!window.mina) {
      toast.error("install Mına Auro Wallet exensıon ");
    } else {
      try {
        // @ts-ignore
        const accounts: string[] = await window.mina.requestAccounts();
        setAccount(accounts);
        localStorage.setItem("accounts", JSON.stringify(accounts));
      } catch (err) {
        console.log(err);
      }
    }
  };
  const getAccounts = () => {
    return JSON.parse((localStorage.getItem("accounts") as string) ?? {});
  };
  return { connect, getAccounts };
};

export default useWallet;
