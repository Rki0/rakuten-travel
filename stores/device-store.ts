import { createStore } from "zustand/vanilla";

export interface DeviceState {
  isMobile: boolean;
  isAndroid: boolean;
  isIOS: boolean;
}

export interface DeviceActions {
  setIsMobile: (isMobile: boolean) => void;
  setIsAndroid: (isAndroid: boolean) => void;
  setIsIOS: (isIOS: boolean) => void;
}

export type DeviceStore = DeviceState & DeviceActions;

export const initDeviceStore = (): DeviceState => {
  return { isMobile: false, isAndroid: false, isIOS: false };
};

export const defaultInitState: DeviceState = {
  isMobile: false,
  isAndroid: false,
  isIOS: false,
};

export const createDeviceStore = (
  initState: DeviceState = defaultInitState
) => {
  return createStore<DeviceStore>()((set) => ({
    ...initState,
    setIsMobile: (isMobile) => set(() => ({ isMobile })),
    setIsAndroid: (isAndroid) => set(() => ({ isAndroid })),
    setIsIOS: (isIOS) => set(() => ({ isIOS })),
  }));
};
