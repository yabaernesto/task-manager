import { Check, Search, Trash2 } from 'lucide-react'
import { Header } from './header/header'

function Dashboard() {
  return (
    <div className="">
      <Header />

      <main className="h-auto mt-14 flex justify-center">
        <div className="h-auto flex flex-col w-areaTask p-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <p className="text-sm text-zinc-200">
              Register your tasks and have a better monitoring of your
              activities
            </p>
          </div>

          <div className="w-full my-8 py-2 px-4 bg-secondary flex items-center gap-2 rounded-lg">
            <span className="h-8 w-8 bg-primaryColor flex justify-center items-center rounded-md">
              <Search className="h-4 w-4 text-white" />
            </span>
            <input
              type="search"
              placeholder="Find of tasks"
              className="w-full p-1 bg-secondary text-sm text-zinc-200 no-clear outline-none"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold">Tasks - 2</h2>

            <div className="flex gap-2 py-3 px-4 bg-secondary rounded-xl">
              <div className="h-5 w-5 border border-primaryColor rounded-md cursor-pointer" />
              <div className="">
                <h2 className="text-base text-zinc-200 cursor-pointer">
                  Solve computer logic problems
                </h2>
                <span className="text-xs text-primaryColor font-semibold">
                  Today
                </span>
              </div>
            </div>

            <div className="flex justify-between py-3 px-4 bg-secondary rounded-xl">
              <div className="flex gap-2">
                <div className="h-5 w-5 border bg-primaryColor rounded-md flex justify-center items-center cursor-pointer">
                  <Check className="h-4 w-5 text-zinc-200" />
                </div>
                <div className="">
                  <h2 className="text-base text-zinc-200 line-through cursor-pointer">
                    Solve computer logic problems
                  </h2>
                  <span className="text-xs text-primaryColor font-semibold">
                    Today
                  </span>
                </div>
              </div>

              <Trash2 className="h-5 w-5 text-zinc-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
