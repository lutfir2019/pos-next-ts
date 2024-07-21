import { create } from "zustand";

type State = {
  show?: boolean;
  message?: string;
  title?: string;
  icon?: string;
  type?: "success" | "error" | "warning" | "info";
  error?: string[];
};

type Action = {
  setLayout: (state: State) => void;
};

export const useLayout = create<State & Action>((set) => ({
  show: false,
  title: "",
  message: "",
  icon: "",
  type: "info",
  error: [],
  setLayout: (state) => set(state),
}));
