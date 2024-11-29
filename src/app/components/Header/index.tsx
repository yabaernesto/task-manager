import { Button } from '../Button'
import { Logo } from '../Logo'
import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <Logo className="cursor-pointer" />

        <nav className="flex items-center gap-10 text-sm text-gray-200">
          <Link href="/">About us</Link>
          <Link href="/cases">Cases</Link>
          <Link href="/resources">Resources</Link>
        </nav>

        <Link href="/sign-in">
          <Button type="button" className="w-32">
            Sign In
          </Button>
        </Link>
      </header>
    </>
  )
}
