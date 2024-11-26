import { Facebook, Twitter } from 'lucide-react'
import { Logo } from '../components/Logo'
import Link from 'next/link'
import { Button } from '../components/Button'
import * as Root from '../components/Form/Input'

const SignIn = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-96 flex flex-col">
        <Logo className="h-6" />

        <div className="mt-8 space-y-2">
          <div className="w-full flex items-center bg-[#363041]">
            <span className="bg-violet-500 py-3 px-4 rounded-s-lg">
              <Facebook className="text-white text-xs" />
            </span>
            <span className="w-full py-2 px-4 text-sm text-gray-200 cursor-pointer">
              <Link href="/aksaksa">Facebook</Link>
            </span>
          </div>

          <div className="w-full flex items-center bg-[#363041]">
            <span className="bg-violet-500 py-3 px-4 rounded-s-lg">
              <Twitter className="text-white text-xs" />
            </span>
            <span className="w-full py-2 px-4 text-sm text-gray-200 cursor-pointer">
              <Link href="/aksaksa">Twitter</Link>
            </span>
          </div>
        </div>

        <form className="w-full mt-10 space-y-4">
          <Root.Root>
            <Root.Label>Your email</Root.Label>
            <Root.Control
              type="email"
              id="email"
              placeholder="Pleace insert your e-mail adress"
            />
          </Root.Root>

          <Root.Root>
            <Root.Label>Password</Root.Label>
            <Root.Control
              type="password"
              id="password"
              placeholder="Pleace insert your password adress"
            />
          </Root.Root>

          <Button
            type="submit"
            className="w-full py-2 px-3 bg-violet-300 hover:bg-violet-400 text-violet-900 hover:text-violet-900 rounded-md"
          >
            Sign in
          </Button>

          <p className="text-center text-sm text-white cursor-pointer hover:underline">
            Não tens uma conta? Criar conta agora.
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn
