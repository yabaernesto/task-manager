import { Button } from '../Button'
import { Logo } from '../Logo'
import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between mb-5">
        <Logo className="cursor-pointer" />

        <nav className="flex items-center gap-10 text-sm text-gray-200">
          <Link href="/">About us</Link>
          <Link href="/cases">Cases</Link>
          <Link href="/resources">Resources</Link>
        </nav>

        <Button className="w-32 py-2 px-3 bg-violet-300 hover:bg-violet-400 text-violet-900 hover:text-violet-900 rounded-md">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </header>
    </>
  )
}
