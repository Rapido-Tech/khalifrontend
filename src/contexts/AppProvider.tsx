"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
