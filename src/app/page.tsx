import Link from 'next/link'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <div className="pt-10 px-20">
      <Header />
      <main className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl">
            <span className="text-violet-300 font-bold leading-10">
              Creative Digital
            </span>{' '}
            Design Agency <br /> is looking for new talent
          </h1>
          <p className="my-5">
            Creative Digital Design Agency is looking for new talent
          </p>

          <Button className="w-36 py-2 px-3 bg-violet-300 hover:bg-violet-400 text-violet-900 hover:text-violet-900 rounded-md">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>

        <div className="">
          <Hero className="h-96" />
        </div>
      </main>
    </div>
  )
}
