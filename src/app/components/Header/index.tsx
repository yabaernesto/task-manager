'use client'

import { Menu } from 'lucide-react'
import { Button } from '../Button'
import { Logo } from '../Logo'
import Link from 'next/link'

export function Header() {
  function handleMenuClick() {}

  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <Logo className="cursor-pointer" />

        <nav className="hidden lg:flex items-center gap-10 text-sm text-gray-200">
          <Link href="/" className="font-bold text-lg text-[#B4ACF9]">
            About us
          </Link>
          <Link href="/cases" className="font-bold text-lg text-white/80">
            Cases
          </Link>
          <Link href="/resources" className="font-bold text-lg text-white/80">
            Resources
          </Link>
        </nav>

        <Link href="/sign-in" className="hidden lg:flex">
          <Button
            type="button"
            className="w-[136px] h-[50px] font-medium text-lg"
          >
            Sign In
          </Button>
        </Link>

        <div className="flex lg:hidden">
          <button type="button" onClick={handleMenuClick}>
            <Menu className="h-6 w-6 cursor-pointer text-white/80" />
          </button>
        </div>
      </header>
    </>
  )
}
