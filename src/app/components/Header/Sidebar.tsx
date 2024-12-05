'use client'

import { X } from 'lucide-react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed flex flex-col items-center top-0 left-0 w-full h-full bg-[#B4ACF9] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <button
        type="button"
        className="absolute top-0 right-0 p-10"
        onClick={onClose}
      >
        <X className="h-6 w-6 text-[#2E2938]" />
      </button>

      <nav className="flex flex-col items-center gap-5 text-sm m-auto">
        <Link href="/" className="font-bold text-2xl text-[#2E2938]">
          About us
        </Link>
        <Link href="/cases" className="font-bold text-2xl text-white">
          Cases
        </Link>
        <Link href="/resources" className="font-bold text-2xl text-white">
          Resources
        </Link>
      </nav>
    </div>
  )
}
