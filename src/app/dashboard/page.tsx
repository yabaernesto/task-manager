import { Search } from 'lucide-react'
import { Root, ContainerDiv, ButtonTask } from './header'
import { ListTask } from './task/ListTask'
import { Profile } from './profile/profile'
import { MenuBar } from './header/header'

function Dashboard() {
  return (
    <div className="">
      <Root>
        <ContainerDiv>
          <MenuBar />
          <ButtonTask />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 rounded-full cursor-pointer"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

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

          <div className="space-y-3.5">
            <h2 className="text-xl font-bold">Tasks - 2</h2>

            <ListTask />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
