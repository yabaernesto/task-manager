import { Facebook, Twitter } from 'lucide-react'
import { Logo } from '../components/Logo'
import Link from 'next/link'
import { Button } from '../components/Button'
import * as Root from '../components/Form/Input'
import * as Social from '../components/Form/Social'

const SignIn = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-96 flex flex-col">
        <Logo className="h-6" />

        <div className="mt-8 space-y-2">
          <Social.Root>
            <Social.SpanIcon>
              <Facebook className="text-white text-xs" />
            </Social.SpanIcon>
            <Social.SpanText>
              <Link href="/aksaksa">Facebook</Link>
            </Social.SpanText>
          </Social.Root>

          <Social.Root>
            <Social.SpanIcon>
              <Twitter className="text-white text-xs" />
            </Social.SpanIcon>
            <Social.SpanText>
              <Link href="/aksaksa">Twitter</Link>
            </Social.SpanText>
          </Social.Root>
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
