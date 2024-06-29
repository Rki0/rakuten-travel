import { createStore } from "zustand/vanilla";

export interface ViewportState {
  isMobileView: boolean;
  isPcView: boolean;
}

export interface ViewportActions {
  setIsMobileView: () => void;
  setIsPcView: () => void;
}

export type ViewportStore = ViewportState & ViewportActions;

export const initViewportStore = (): ViewportState => {
  return { isMobileView: false, isPcView: false };
};

export const defaultInitState: ViewportState = {
  isMobileView: false,
  isPcView: false,
};

export const createViewportStore = (
  initState: ViewportState = defaultInitState
) => {
  return createStore<ViewportStore>()((set) => ({
    ...initState,
    setIsMobileView: () => set(() => ({ isMobileView: true, isPcView: false })),
    setIsPcView: () => set(() => ({ isMobileView: false, isPcView: true })),
  }));
};
