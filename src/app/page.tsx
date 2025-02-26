import Link from "next/link";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <section className="px-6 lg:m-auto lg:w-full lg:px-20">
      <div className="pt-8 lg:h-screen lg:space-y-2 lg:overflow-hidden">
        <Header />

        <main className="flex flex-col space-y-4 lg:flex lg:w-full lg:flex-grow lg:flex-row lg:items-center lg:justify-between">
          <div className="mt-10 flex flex-col space-y-10">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold lg:text-4xl">
                <span className="font-bold leading-10 text-violet-300">
                  Creative Digital
                </span>{" "}
                Design Agency <br /> is looking for new talent
              </h1>

              <p className="text-sm font-bold text-white/80 lg:text-lg">
                Creative Digital Design Agency is looking for new talent
              </p>
            </div>

            <div className="hidden lg:flex">
              <Link href="/sign-up" className="text-lg font-medium">
                <Button className="h-12 w-[9.875rem]">Sign Up</Button>
              </Link>
            </div>

            <div className="flex h-10 w-36 lg:hidden">
              <Link href="/sign-in" className="text-lg font-medium">
                <Button className="h-12 w-[9.875rem]">Get started</Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Hero className="h-[30rem] w-[30rem]" />
          </div>
        </main>
      </div>
    </section>
  );
}
