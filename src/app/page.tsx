import Link from 'next/link'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden pt-8 px-20 space-y-2">
      <Header />

      <main className="flex-grow w-full flex items-center justify-between">
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-violet-300 font-bold leading-10">
                Creative Digital
              </span>{' '}
              Design Agency <br /> is looking for new talent
            </h1>

            <p className="font-bold text-lg text-white/80">
              Creative Digital Design Agency is looking for new talent
            </p>
          </div>

          <Link href="/sign-up" className="font-medium text-lg">
            <Button className="w-[158px] h-12">Sign Up</Button>
          </Link>
        </div>

        <div className="flex items-center h-auto">
          <Hero className="flex-1 w-[584px] h-[584px]" />
        </div>
      </main>
    </div>
  )
}
