import Link from 'next/link'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function Home() {
  return (
    <section className="px-6 lg:w-full lg:px-20 lg:m-auto">
      <div className="pt-8 lg:h-screen lg:overflow-hidden lg:space-y-2">
        <Header />

        <main className="flex flex-col space-y-4 lg:w-full lg:flex lg:flex-row lg:flex-grow lg:items-center lg:justify-between">
          <div className="mt-10 flex flex-col space-y-10">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold lg:text-4xl">
                <span className="text-violet-300 font-bold leading-10">
                  Creative Digital
                </span>{' '}
                Design Agency <br /> is looking for new talent
              </h1>

              <p className="text-sm lg:text-lg font-bold text-white/80">
                Creative Digital Design Agency is looking for new talent
              </p>
            </div>

            <div className="hidden lg:flex">
              <Link href="/sign-up" className="font-medium text-lg">
                <Button className="w-[9.875rem] h-12">Sign Up</Button>
              </Link>
            </div>

            <div className="flex lg:hidden w-36 h-10">
              <Link href="/sign-in" className="font-medium text-lg">
                <Button className="w-[9.875rem] h-12">Get started</Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <Hero className="w-[30rem] h-[30rem]" />
          </div>
        </main>
      </div>
    </section>
  )
}
