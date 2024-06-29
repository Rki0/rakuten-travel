"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type ViewportStore,
  createViewportStore,
  initViewportStore,
} from "@/stores/viewport-store";

export type ViewportStoreApi = ReturnType<typeof createViewportStore>;

export const ViewportStoreContext = createContext<ViewportStoreApi | undefined>(
  undefined
);

export interface ViewportStoreProviderProps {
  children: ReactNode;
}

export const ViewportStoreProvider = ({
  children,
}: ViewportStoreProviderProps) => {
  const storeRef = useRef<ViewportStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createViewportStore(initViewportStore());
  }

  return (
    <ViewportStoreContext.Provider value={storeRef.current}>
      {children}
    </ViewportStoreContext.Provider>
  );
};

export const useViewportStore = <T,>(
  selector: (store: ViewportStore) => T
): T => {
  const viewportStoreContext = useContext(ViewportStoreContext);

  if (!viewportStoreContext) {
    throw new Error(
      `useViewportStore must be used within ViewportStoreProvider`
    );
  }

  return useStore(viewportStoreContext, selector);
};
