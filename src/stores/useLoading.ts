import { LoadingType } from "@/types/globalType";
import { create } from "zustand";

type Action = {
  setLoading: (state: LoadingType) => void;
};

export const useLoading = create<LoadingType & Action>((set) => ({
  is_loading: false,
  is_soft_loading: false,
  setLoading: (state) => set(state),
}));
