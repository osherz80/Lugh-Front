import { create } from "zustand";

interface State {
  inputText: string;
  setInputText: (text: string) => void;
}

export const useAppStore = create<State>((set) => ({
  inputText: "",
  setInputText: (text: string) => set({ inputText: text }),
}));
