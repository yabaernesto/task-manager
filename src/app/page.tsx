import Link from 'next/link'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden pt-8 px-20 space-y-2">
      <Header />

      <main className="flex-grow w-full flex items-center justify-between">
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

          <Button className="w-36">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>

        <div className="flex items-center h-auto">
          <Hero className="flex-1 -mt-3.5" />
        </div>
      </main>
    </div>
  )
}
