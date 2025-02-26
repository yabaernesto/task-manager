"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface SidebarTasksProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarTasks({ isOpen, onClose }: SidebarTasksProps) {
  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-2/3 flex-col bg-[#B4ACF9] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-end p-5">
          <button type="button" className="h-5 w-5" onClick={onClose}>
            <X className="h-5 w-5 text-[#2E2938]" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-3 px-8">
          <Link href="/" className="text-xl font-medium text-[#2E2938]">
            About us
          </Link>
          <Link href="/cases" className="text-xl font-medium text-white">
            Cases
          </Link>
          <Link href="/resources" className="text-xl font-medium text-white">
            Resources
          </Link>
        </nav>
      </div>
    </div>
  );
}
