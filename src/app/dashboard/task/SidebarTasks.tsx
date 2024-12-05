'use client'

import { X } from 'lucide-react'
import Link from 'next/link'

interface SidebarTasksProps {
  isOpen: boolean
  onClose: () => void
}

export function SidebarTasks({ isOpen, onClose }: SidebarTasksProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-2/3 flex flex-col bg-[#B4ACF9] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex flex-col">
        <div className="p-5 flex items-center justify-end">
          <button type="button" className="h-5 w-5" onClick={onClose}>
            <X className="h-5 w-5 text-[#2E2938]" />
          </button>
        </div>

        <nav className="mt-10 px-8 flex flex-col gap-3">
          <Link href="/" className="font-medium text-xl text-[#2E2938]">
            About us
          </Link>
          <Link href="/cases" className="font-medium text-xl text-white">
            Cases
          </Link>
          <Link href="/resources" className="font-medium text-xl text-white">
            Resources
          </Link>
        </nav>
      </div>
    </div>
  )
}
