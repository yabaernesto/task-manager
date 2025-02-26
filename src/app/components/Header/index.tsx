"use client";

import { Menu } from "lucide-react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./components/sidebar";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebarOpen() {
    setIsOpen(true);
  }

  function handleSidebarClose() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <Logo className="cursor-pointer" />

        <nav className="hidden items-center gap-10 text-sm text-gray-200 lg:flex">
          <Link href="/" className="text-lg font-bold text-[#B4ACF9]">
            About us
          </Link>
          <Link href="/cases" className="text-lg font-bold text-white/80">
            Cases
          </Link>
          <Link href="/resources" className="text-lg font-bold text-white/80">
            Resources
          </Link>
        </nav>

        <Link href="/sign-in" className="hidden lg:flex">
          <Button
            type="button"
            className="h-[50px] w-[136px] text-lg font-medium"
          >
            Sign In
          </Button>
        </Link>

        <div className="flex lg:hidden">
          <button type="button" onClick={handleSidebarOpen}>
            <Menu className="h-6 w-6 cursor-pointer text-white/80" />
          </button>
        </div>
      </header>

      <Sidebar isOpen={isOpen} onClose={handleSidebarClose} />
    </>
  );
}
