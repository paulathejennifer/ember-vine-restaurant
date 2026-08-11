"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ReservationModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ReservationModalContext = createContext<ReservationModalContextValue | undefined>(undefined);

export function ReservationModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const value: ReservationModalContextValue = {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  };

  return (
    <ReservationModalContext.Provider value={value}>
      {children}
    </ReservationModalContext.Provider>
  );
}

export function useReservationModal() {
  const context = useContext(ReservationModalContext);

  if (!context) {
    throw new Error(
      "useReservationModal must be used within a ReservationModalProvider"
    );
  }

  return context;
}