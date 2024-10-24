"use client";
import { ArrowLeft } from "lucide-react";
import PAGE_NAMES from "../utils/PAGE_NAMES";
import Link from "next/link";
import { useEffect } from "react";

export const BackButton = () => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      window.location.href = PAGE_NAMES.HOME;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Link
      href={PAGE_NAMES.HOME}
      className="flex flex-row items-center gap-x-2 group"
      aria-label="Go back to home page"
    >
      <ArrowLeft
        size={20}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
      <span>Back</span>
    </Link>
  );
};
