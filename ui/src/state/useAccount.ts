import { create } from "zustand";

type StateType = {
  account: null | any;
  setAccount: (account: any) => void;
};

const useAccount = create<StateType>((set) => ({
  account: null,
  setAccount: (account) =>
    set(() => ({
      account,
    })),
}));

export default useAccount;
