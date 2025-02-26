"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full flex-col items-center bg-[#B4ACF9] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        type="button"
        className="absolute right-0 top-0 p-10"
        onClick={onClose}
      >
        <X className="h-6 w-6 text-[#2E2938]" />
      </button>

      <nav className="m-auto flex flex-col items-center gap-5 text-sm">
        <Link href="/" className="text-2xl font-bold text-[#2E2938]">
          About us
        </Link>
        <Link href="/cases" className="text-2xl font-bold text-white">
          Cases
        </Link>
        <Link href="/resources" className="text-2xl font-bold text-white">
          Resources
        </Link>
      </nav>
    </div>
  );
}
