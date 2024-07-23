import { create } from "zustand";

import { LoadingType } from "@/types/globalType";

type Action = {
  setLoading: (state: LoadingType) => void;
};

export const useLoading = create<LoadingType & Action>((set) => ({
  is_loading: false,
  is_soft_loading: false,
  setLoading: (state) => set(state),
}));
