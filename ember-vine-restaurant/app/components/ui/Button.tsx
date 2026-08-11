"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useReservationModal } from "@/app/context/ReservationModalContext";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "secondary-dark";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-x-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] px-8 py-3.5 transition-colors duration-200";

const variantStyles = {
  primary: "bg-gold hover:bg-gold-hover text-obsidian",
  secondary: "border border-ivory/70 hover:border-gold hover:text-gold text-ivory bg-transparent",
  "secondary-dark": "border border-obsidian/60 hover:border-gold hover:text-gold text-obsidian bg-transparent",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  icon,
}: ButtonProps) {
  const { openModal } = useReservationModal();
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  // Any button/link pointing to "#reservations" opens the reservation
  // modal instead of navigating — this is what makes every
  // "Reserve a Table" button across the site work automatically.
  if (href === "#reservations") {
    return (
      <button
        onClick={() => {
          openModal();
          onClick?.();
        }}
        className={styles}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}