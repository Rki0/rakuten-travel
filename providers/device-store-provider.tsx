"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type DeviceStore,
  createDeviceStore,
  initDeviceStore,
} from "@/stores/device-store";

export type DeviceStoreApi = ReturnType<typeof createDeviceStore>;

export const DeviceStoreContext = createContext<DeviceStoreApi | undefined>(
  undefined
);

export interface DeviceStoreProviderProps {
  children: ReactNode;
}

export const DeviceStoreProvider = ({ children }: DeviceStoreProviderProps) => {
  const storeRef = useRef<DeviceStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createDeviceStore(initDeviceStore());
  }

  return (
    <DeviceStoreContext.Provider value={storeRef.current}>
      {children}
    </DeviceStoreContext.Provider>
  );
};

export const useDeviceStore = <T,>(selector: (store: DeviceStore) => T): T => {
  const deviceStoreContext = useContext(DeviceStoreContext);

  if (!deviceStoreContext) {
    throw new Error(`useDeviceStore must be used within DeviceStoreProvider`);
  }

  return useStore(deviceStoreContext, selector);
};
